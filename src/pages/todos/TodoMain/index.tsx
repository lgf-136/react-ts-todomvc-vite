import { observer } from 'mobx-react-lite';
import useStore from '../../../store';
import { ITodo } from '../../../store/todos/todoListStore';
import TodoStore from '../../../store/todos/todoStore';

import './index.css';

function TodoMain({ todo }: any) {
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

export default observer(TodoMain);
