import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import { observer } from 'mobx-react-lite';
import useStore from '../../store';

import './index.css';

function TodoListView() {
  const { todoListStore } = useStore();
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </section>
  );
}

export default observer(TodoListView);
