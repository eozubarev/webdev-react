import './App.css';
import TestComponent from './Test-component';
import Header from './Header/Header';
import Goods from './Goods';

const headerData = {
  siteName : 'My text site name',
  nav: [
    {'link' : 'nav', 'text' : 'my link'},
    {'link' : 'nav1', 'text' : 'my link 2'},
    {'link' : 'nav2', 'text' : 'my link 3'},
    {'link' : 'nav3', 'text' : 'my link 4'},
  ]
};

const goods = [
  {'title' : 'apple', 'cost' : 330, "image" : 'https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png', 'key' : 1},
  {'title' : 'pear', 'cost' : 520, "image" : 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png', 'key' : 2}
];

function App() {
  return (
	<div>
    <Header data={headerData}/>
    <TestComponent />
    {goods.map( item => {
      return <Goods key={item.key} title={item.title}
                    cost={item.cost}
                    image={item.image}
              />
    })}
  </div>
  );
}


export default App;
