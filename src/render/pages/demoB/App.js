import React, { useEffect, useState } from 'react';
import { ipc, store } from 'sugar-electron/render';
const GET_NAME = '/name';
function App() {
  const [storeName, setStoreName] = useState(store.state.name);
  useEffect(() => {
    ipc.response(GET_NAME, (json, cb) => {
      cb(`demoB name随机数${Math.random() * 10}`);
    });

    const unsubscribe = store.subscribe((data) => {
      setStoreName(data.name);
    });

    const timer = setInterval(() => {
      ipc.publisher('demoB', `demoB广播随机数${Math.random() * 10}`)
    }, 2000)

    return () => {
      ipc.unresponse(GET_NAME);
      unsubscribe();
      clearInterval(timer);
    }
  });
  return <div>
    <div>
      <div>store state name: <span style={{color: 'red'}}>{storeName}</span></div>
    </div>
  </div>;
}

export default App;