import './App.css';
import Header from './Components/Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// У кого ошибка, появилась новая 6 версия Роутера. 
// 1.Вместо Switch будет Routes
// 2.Вместо component будет element
// 3. component = "about"  👉  element = {<about/>}
// 4. import {BrowserRouter , Router, Routes, Link} from  "react-router-dom".

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element= { <Main/> } />
          <Route path="/about" element = { <About/> } />
          <Route exact path="/users" element= { <Users/> } />
          <Route path="/users/:userName" element= { <UserId/> } />
          <Route path="*" element= { <Error/> } />
        </Routes>
      </Router>
    </>
  );
}


export default App;


