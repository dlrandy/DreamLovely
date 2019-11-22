import Club from '@Structural/adaptor/Club';
import Dancer from '@Structural/adaptor/Dancer';
import Musician from '@Structural/adaptor/Musician';

function isClub(obj: any): obj is Club {
  return obj instanceof Club;
}

function isDancer(obj: any): obj is Dancer {
  return obj instanceof Dancer;
}

function isMusician(obj: any): obj is Musician {
  return obj instanceof Musician;
}
class Adaptor {
  constructor(public obj: Club | Dancer | Musician) {


  }
  public organize_event(): string {
    let performance = '';
    if (isDancer(this.obj)) {
      performance = this.obj.dance();
    } else if (isMusician(this.obj)) {
      performance = this.obj.play();
    } else {
      performance = this.obj.organize_event();
    }
    return performance;
  }
}
  const objects = [
    new Club('starbuck'),
    new Musician('tylor swift'),
    new Dancer('machale jackson')
  ];
  objects.forEach(obj => {
    const adaptor = new Adaptor(obj);
    console.log(adaptor.organize_event())
  })
  export default 'adaptor01'
