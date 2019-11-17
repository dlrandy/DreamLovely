import {
  BoxGeometry, BufferGeometry, Color, DirectionalLight, Geometry, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, Scene, WebGLRenderer
} from 'three';

export default function IndexApp () {
  // 视野
  const fov = 75;
  // canvas的显示比例，宽高比
  const aspect = 2;
  // camera 前的空间
  const near = 0.1;
  const far = 5;
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);


  function makeInstance(geometryG:Geometry | BufferGeometry | undefined, colorC: string|number|Color|undefined, x: number): Mesh {
    const material = new MeshPhongMaterial({
      color: colorC,
    });
    const cube = new Mesh(geometryG, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
  }
  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);


  const canvas = document.querySelector('#app') as HTMLCanvasElement;

  // 不传canvas的话，three会为你创建一个canvas，但是需要加到document上
  const renderer = new WebGLRenderer({
    canvas,
  });

  function render(time:number): void {
    time *= 0.001;

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    })
    renderer.render(scene, camera);

    requestAnimationFrame(render)

  }
  requestAnimationFrame(render);



}
