import React, { useState } from 'react';
import Counter from './Counter.js';
import Info from './Info.js'
import ContextSample from './ContextSample.js';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <button onClick={() => setVisible(!visible)}> {visible ? '숨기기' : '보이기'} </button>
    <hr/>
    <Counter/>
    <hr/>
    {visible && <Info/>}
    <ContextSample/>
    </>
  );
}

export default App;
