// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleMode = () => {
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      document.querySelector('textarea').style.backgroundColor = 'grey';
    }else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelector('textarea').style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Text Utils" mode={theme} toggleMode={toggleMode} aboutText="About TextUtils"/>
    <div className="container my-5">
      <Textform heading="Enter Text Below"/>
    </div>
    </>
  );
}

export default App;
