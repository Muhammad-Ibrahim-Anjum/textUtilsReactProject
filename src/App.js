// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  const [theme, setTheme] = useState('light');
  const toggleMode = () => {
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = '#3B3C36';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success")
    }else{
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
    setAlert({
      mesg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  return (
    <>
    <Router>
    <Navbar title="Text Utils" mode={theme} toggleMode={toggleMode} aboutText="About TextUtils"/>
    <Alert alert = {alert}/>
      <Switch>
        <Route exact path="/About">
          <About mode={theme} />
        </Route>
        <Route exact path="/">
            <Textform mode={theme} showAlert={showAlert} heading="Enter Text Below"/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
