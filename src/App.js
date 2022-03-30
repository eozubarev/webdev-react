import './App.css';

let text = '111';

function App() {

  let text2 = '222';

  const style = {
   fontSize: '24px',
   fontStyle : 'italic',
   color: 'red'
  }


  return (
	<div className="container">
    <img src="/images/test.webp" alt='Картинка'/>
    <ul>
      <li style={style}>Hello</li>
      <li>{text + text2}</li>
    </ul>
    <h1>app_1</h1>
  </div>  
  );
}


export default App;
