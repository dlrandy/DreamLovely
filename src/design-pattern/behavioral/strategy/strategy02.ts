export default 'strategy02';
type TargetType = 'a' | 'b';

interface ITarget {
  type: TargetType
}

interface ITargetA extends ITarget {
  type: 'a';
  result: string;
}

interface ITargetB extends ITarget {
  type: 'b';
  value: number;
}

interface IStrategy<TTarget extends ITarget> {
  operationX(target: TTarget): void;
  operationY(target: TTarget): void;
}

// tslint:disable-next-line: one-variable-per-declaration
const strategyA: IStrategy<ITargetA> = {
  operationX(target: ITargetA){
    target.result = target.result + target.result;
  },
  operationY(target: ITargetA){
    target.result = target.result.substr(target.result.length / 2);
  }
}

const strategyB: IStrategy<ITargetB> = {
  operationX(target: ITargetB){
    target.value = target.value * 2;
  },
  operationY(target: ITargetB){
    target.value = target.value * 3;
  }
}

const strategies: {
  [type: string]: IStrategy<ITarget>
} = {
  a: strategyA,
  b: strategyB
}


const targets: ITarget[] = [
  {
    type: 'a'
  },
  {
    type: 'b'
  }
]

for (const target of targets) {
  const strategy = strategies[target.type]
  strategy.operationX(target);
  strategy.operationY(target);
}





























