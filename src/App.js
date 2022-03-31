import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Main/Sidebar';

const site = {
	site_name : "React about Site",
	site_title : "my first site with react",
	nav : [
    {"link": "nav1", "text": "my link" },
    {"link": "nav2", "text": "my link 2" },
    {"link": "nav3", "text": "my link 3" },
  ]
}


function App() {
  return (
	<div>
    <Header siteInfo = {site} />
    <Footer siteInfo = {site} />
  </div>
  );
}


export default App;
