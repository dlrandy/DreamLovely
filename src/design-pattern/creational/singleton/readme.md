# 设计模式之单例模式

**单例模式属于创建型模式**

![markdown](https://images.unsplash.com/photo-1569261995036-70d0dd50be24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80 "
Kevin Mueller")

>  单例模式确保一个class只有一个实例，同时对实例提供全局的访问点。


###为什么要控制一个class的实例的个数？
很大原因在于控制对共享资源的访问，比如，数据库或者文件


##解决方式
1. 构造器私有，阻止其他对象new 单例类
2. 静态创建方法来作为构造器，调用私有的构造器创建对象，并将对象保存在static域。以后每次调用静态的创建方法，都返回这个对象。


##什么时候需要使用单例模式？
1. 要确保用户只能使用一个类的实例的时候，
2. 需要严格限制全局变量的时候，
  不像全局变量，单例可以保证只有一个类实例，除了类本身，别人无法替换缓存的实例

##优点
1. 确保一个class只有一个实例
2. 获得单例的全局访问入口
3. 单例对象只在第一次请求的时候初始化

##缺点
1.违背了单一责任原则
2.在多线程的环境需要特殊对待

###和其他模式的关系
1. Facade类可变转换为单例类，因为一个facade对象可以满足大多数的情况
2. Flyweight在和单例很像，特别是在将对象们的所有共享状态加入到
  一个flyweight对象的时候。
  1. flyweight class可以由不同固有state的多个实例
  2. 单例的对象可以改变；flyweight对象不可以改变

![eberhard grossgasteiger](https://images.unsplash.com/photo-1569196769169-148d853ee706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80 "eberhard grossgasteiger")End











