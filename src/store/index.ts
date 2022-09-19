import CounterStore from './counter/counterStore';
import TodoListStore, { ITodo } from './todos/todoListStore';
import { createContext, useContext } from 'react';

class RootStore {
  counterStore = new CounterStore();
  todoListStore = new TodoListStore([]);
}

export const stores = new RootStore();

export const context = createContext(stores);


const useStore = () => {
  return useContext(context);
};

export default useStore;
