import mitt from 'mitt';

// 创建一个 mitt 实例作为事件总线
const emitter = mitt();

// 提供一个函数，使组件可以访问事件总线
export function useEventBus() {
  return emitter;
}