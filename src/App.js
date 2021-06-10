import {Route, Switch} from 'react-router'
import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './components/Home/Dropdown';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
     if(window.innerWidth > 768 && isOpen){
       setIsOpen(false);
       console.log('resized')
     }
    };
    window.addEventListener('resized', hideMenu)

    return  () => {
      window.removeEventListener('resized', hideMenu);
    };
  },)
  return (
    <>
    
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact>
      <Home />
      </Route>
        <Route path="/about" exact>
      <About />
      </Route>
        <Route path="/services" exact>
        <Services />
      </Route>
      </Switch>
    </>
  );
}

export default App;
