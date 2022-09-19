import TodoItem from './TodoItem';
import { observer } from 'mobx-react-lite';
import useStore from '../../../store';
import './index.css';
function TodoList() {
  const { todoListStore } = useStore();
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todoListStore.filterTodos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default observer(TodoList);
