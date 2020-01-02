import AdvancedRemoteControl from './AdvancedRemoteControl';
import Radio from './Radio'
import RemoteControl from './RemoteControl';
import TV from './TV';

const tv = new TV();
const tvRemoteControl = new RemoteControl(tv);
tvRemoteControl.togglePower();

const redio = new Radio();
const radioCtrl = new AdvancedRemoteControl(redio);
