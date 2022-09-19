import { useState } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import reactLogo from './assets/react.svg';
import './App.css';
import useStore, { stores, context } from './store';
import Todos from './pages/todos';

function App() {
  const [count, setCount] = useState(0);
  const { todoListStore } = useStore();

  return (
    // <MobxProvider {...stores}>  // 由于 在需要的模块直接使用 useStore即可，无需外包 Provider
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Todos />
    </>
    // </MobxProvider>
  );
}

export default App;
