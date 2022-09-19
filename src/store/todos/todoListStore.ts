import TodoStore from './todoStore';
import {
  action,
  computed,
  makeObservable,
  makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';

import axios from 'axios';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoListStore {
  todos: TodoStore[] =[];
  filter = 'all';
  constructor(todos: TodoStore[]) {
    if (todos) this.todos = todos;
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      removeTodo: action,
      unCompletedTodoCount: computed,
      filter: observable,
      changeFilter: action,
      filterTodos: computed,
    });
    // 等价于
    // makeAutoObservable(this, {}, { autoBind: true });
    this.loadTodos();
  }
  get unCompletedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  get filterTodos() {
    switch (this.filter) {
      case 'all':
        return this.todos;
      case 'active':
        return this.todos.filter((todo) => !todo.completed);
      case 'completed':
        return this.todos.filter((todo) => todo.completed);
      default:
        return this.todos;
    }
  }
  changeFilter(filter: string) {
    this.filter = filter;
  }
  createTodo(title: string) {
    this.todos.push(new TodoStore(title));
  }
  removeTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
  async loadTodos() {
    let todos = await axios
      .get('http://localhost:3005/todos')
      .then((response) => response.data);
    runInAction(() => {
      todos.forEach((todo: ITodo) => {
        this.todos.push(new TodoStore(todo.title));
      });
    });
  }
}

export default TodoListStore;
