import React, { useEffect, useState, useRef } from 'react';
import { ipc, windowCenter, store } from 'sugar-electron/render';
const { demoB } = windowCenter;
const GET_NAME = '/name';
function App() {
  const ref = useRef();
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [storeName, setStoreName] = useState(store.state.name);

  const onCreateDemoB = () => {
    demoB.open();
  }

  const onSetSizeDemoB = () => {
    demoB.setSize(600, 600);
  }

  const onRequestDemoBName = () => {
    demoB.request(GET_NAME).then(data => {
      setName(data);
    });
  }

  const onChangeStore = () => {
    store.setState({
      name: ref.current.value
    })
  }

  useEffect(() => {
    ipc.response(GET_NAME, (json, cb) => {
      cb('demoA');
    });

    const unsubscribe1 = demoB.subscribe('demoB', (data) => {
      setData(data);
    });

    const unsubscribe2 = store.subscribe((data) => {
      setStoreName(data.name);
    });

    return () => {
      ipc.unresponse(GET_NAME);
      unsubscribe1();
      unsubscribe2();
    }
  });
  return <div>
    <div>
      <button onClick={onCreateDemoB}>创建demoB</button>
      <button onClick={onSetSizeDemoB}>设置demoB setSize(600, 600)</button>
    </div>
    <hr></hr>
    <div>
      <button onClick={onRequestDemoBName}>请求demoB name</button>
      <div>demoB name: <span style={{color: 'red'}}>{name}</span></div>
    </div>
    <div>
      <div>订阅demoB消息: <span style={{color: 'red'}}>{data}</span></div>
    </div>
    <hr></hr>
    <div>
      <button onClick={onChangeStore}>通过输入框，设置store state name</button>
      <input ref={ref} />
      <div>store state name: <span style={{color: 'red'}}>{storeName}</span></div>
    </div>
   
  </div>;
}

export default App;