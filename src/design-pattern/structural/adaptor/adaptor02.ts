export default 'adaptor02';
/**
 * 放在面前的一条船，非船员怎么把它开走呢？
 *
 * @interface IShip
 */
interface IShip{
  // 设置船舵的方向
  setRudderAngleTo(angle: number):void;
  // 设置船帆
  // 注意这里的参数类型 object VS  Object VS {} ?
  // https://mariusschulz.com/blog/the-object-type-in-typescript
  setSailConfiguration(configuration: object):void;
  // 设置船帆的角度
  setSailAngle(sailId: number, sailAngle: number):void;

  /**
   * 其他的一些专业操作
   */
}

/**
 * 要是这种简单的船，就好了
 *
 * @interface ISimpleShip
 */
interface ISimpleShip {
  turnLeft():void;
  turnRight():void;
  goForward():void;
  // 这就更牛逼了
  backward(): void;
}
class Ship implements IShip {
  public setRudderAngleTo(angle: number): void {
    console.log("Method not implemented.");
    /**
     * 获取当前函数名的方法：
     * 1，使用arguments的callee
     *  arguments.callee.toString().match(/function\s+([_\w]+)/)[1])
     * 2, new Error().stack
     *  new Error('dummy').stack.split('\n')[2].replace(/^\s+at\s+(.+?)\s.+/g, '$1' )
     * http://stackz.ru/en/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript
     */
  }
  public setSailConfiguration(configuration: object): void {
    console.log("Method not implemented.");
  }
  public setSailAngle(sailId: number, sailAngle: number): void {
    console.log("Method not implemented.");
  }
}
// tslint:disable-next-line: max-classes-per-file
class ShipAdaptor  {
  private ship = new Ship()

  public turnLeft(): void{
    const { ship: aShip } = this;
    aShip.setRudderAngleTo(-12);
    aShip.setSailAngle(90, 12);
  }

  /**
   * turnRight
   */
  public turnRight(): void {
    const { ship: aShip } = this;
    aShip.setRudderAngleTo(-20);
    aShip.setSailAngle(9,99);
  }

  /**
   * goForward
   */
  public goForward(): void {
    const { ship: aShip } = this;
    aShip.setSailConfiguration({})
  }
}

const ship = new ShipAdaptor();
ship.goForward();
ship.turnLeft();

/*
这段代码有什么问题？
(function(){
  console.log(this)

  (function(){
      console.log(this)


   }())

}())

//正确版本
(function(){
  console.log(this)；

  (function(){
      console.log(this)


   }())

}())
结论就是
注意js里的() {} ,
*/
