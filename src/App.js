import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {

  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('hello');

  function f1() {
    console.log('f1 work');
  }

  function f2(arg) {
    console.log('move' + arg);
  }

  function showInput() {
    console.log(textInput.current.value);
    textOut.current.innerText = textInput.current.value;
    setOutput(textInput.current.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Button</h2>
        <button onClick={f1}>Push</button>
      </section>

      <section>
        <h2>Double click + mouse move</h2>
        <div className="test" onDoubleClick={ () => f2(53) }></div>
      </section>

      <section>
        <h2>Input</h2>
        <input type="text" onInput={showInput} ref={textInput} defaultValue='hi'/>
        <p ref={textOut}></p>
        <h3>{output}</h3>
      </section>
      
    </>
  );
}


export default App;


