import strategy from '@Behavioral/strategy/index';
interface IStrategy {
  execute(a: number, b: number): number;
}

class StrategyAdd implements IStrategy {
  public execute(a: number, b: number): number {
    return a + b;
  }
}

// tslint:disable-next-line: max-classes-per-file
class StrategySubtract implements IStrategy {
  public execute(a: number, b: number): number {
    return a - b;
  }
}

// tslint:disable-next-line: max-classes-per-file
class StrategyMultiply implements IStrategy {
  public execute(a: number, b: number): number {
    return a * b;
  }
}

// tslint:disable-next-line: max-classes-per-file
class Context {
  private aStrategy!: IStrategy;

  /**
   * setStrategy
   */
  public setStrategy(aStrategy: IStrategy) {
    this.aStrategy = aStrategy;
  }

  /**
   * executeStrategy
   */
  public executeStrategy(a: number, b:number) {
    return this.aStrategy.execute(a, b);
  }

}

// tslint:disable-next-line: max-classes-per-file
class App {
  public readonly first: number = 100;
  public readonly second: number = 10;
  public readonly context:Context = new Context();
  /**
   * main
   */
  public main(action: string):number {
    if (action === 'addition') {
      this.context.setStrategy(new StrategyAdd)
    }

    if (action === 'substraction') {
      this.context.setStrategy(new StrategySubtract)
    }

    if (action === 'multiplication') {
      this.context.setStrategy(new StrategyMultiply)
    }
    const result = this.context.executeStrategy(this.first, this.second);
 console.log("result ", result);
    return result;
  }
}

const app = new App();
app.main('addition')
app.main('substraction')






















