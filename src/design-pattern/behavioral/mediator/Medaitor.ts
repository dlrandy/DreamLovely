import Component from './Component';
export default interface IMediator{

  notify(component:Component, type: string):void;
};
