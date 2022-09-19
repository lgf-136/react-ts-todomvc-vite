import { observer } from 'mobx-react-lite';
import useStore from '../../../store';

function TodoItem({ todo }: any) {
  const { todoListStore } = useStore();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          checked={todo.completed}
          onChange={todo.toggle}
          className="toggle"
          type="checkbox"
        />
        <label>{todo.title}</label>
        <button
          onClick={() => todoListStore.removeTodo(todo.id)}
          className="destroy"
        />
      </div>
      <input className="edit" />
    </li>
  );
}

export default observer(TodoItem);
