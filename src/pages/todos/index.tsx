import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoMain from './TodoMain';
import { observer } from 'mobx-react-lite';
import useStore from '../../store';

// import './index.module.css';

function TodoListView() {
  const { todoListStore } = useStore();
  console.log(todoListStore.filterTodos);
  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {todoListStore.filterTodos.map((todo) => (
            <TodoMain key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
      <TodoFooter />
    </section>
  );
}

export default observer(TodoListView);
