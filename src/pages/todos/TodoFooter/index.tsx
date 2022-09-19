import { observer } from 'mobx-react-lite';
import useStore from '../../../store';

import './index.css'

function TodoFooter() {
  const { todoListStore } = useStore();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoListStore.unCompletedTodoCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <button
            onClick={() => todoListStore.changeFilter('all')}
            className={todoListStore.filter === 'all' ? 'selected' : ''}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => todoListStore.changeFilter('active')}
            className={todoListStore.filter === 'active' ? 'selected' : ''}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => todoListStore.changeFilter('completed')}
            className={todoListStore.filter === 'completed' ? 'selected' : ''}
          >
            Completed
          </button>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => todoListStore.clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default observer(TodoFooter);
