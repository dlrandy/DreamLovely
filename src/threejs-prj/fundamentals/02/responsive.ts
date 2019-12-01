import {
  BoxGeometry,
  BufferGeometry,
  Color,
  DirectionalLight,
  Geometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

export default () => {
  const canvas = document.querySelector("#app") as HTMLCanvasElement;
  const renderer = new WebGLRenderer({
    canvas
  });
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new Scene();
  const color = 0xffffff;
  const intensity = 1;
  const light = new DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

  function makeInstance(
    boxGeometry: BoxGeometry,
    theColor: Color | number | undefined,
    x: number
  ): Mesh {
    const material = new MeshPhongMaterial({ color: theColor });
    const cube = new Mesh(boxGeometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
  ];

  function render(time: number): void {
    time *= 0.001;
    if (resizeRendererToDisplaySize(renderer)) {
      const theCanvas = renderer.domElement;
      camera.aspect = theCanvas.clientWidth / theCanvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube: Mesh, inx: number) => {
      const speed = 1 + inx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  const controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 5
  controls.maxDistance = 250
};

function resizeRendererToDisplaySize(renderer: WebGLRenderer): boolean {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio;
  const height = canvas.clientHeight * pixelRatio;
  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}
