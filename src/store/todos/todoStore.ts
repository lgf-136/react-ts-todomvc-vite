import { makeObservable, observable, action } from 'mobx';

// const getId = () => {
//   new Date().getTime();
// };
class TodoStore {
  // id = Math.random();
  id = new Date().getTime();
  title = '';
  completed = false;
  constructor(title: string) {
    this.title = title;
    makeObservable(this, {
      completed: observable,
      toggle: action.bound,
    });
  }
  toggle() {
    this.completed = !this.completed;
    // console.log(this.id);
  }
}
export default TodoStore;
