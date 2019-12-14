import state from '@Behavioral/state/index';
import strategy from '@Behavioral/strategy/index';
import adaptor from '@Structural/adaptor/index';
export default() => {
  // console.group("adaptor");
  // adaptor();
  // console.groupEnd();
  // console.group("strategy");
  // strategy();
  // console.groupEnd();

  console.group("state");
  state();

  console.groupEnd();
}
