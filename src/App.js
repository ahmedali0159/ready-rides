
import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './components/Home/Dropdown';
import Navbar from './components/Home/Navbar';

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
    </>
  );
}

export default App;
