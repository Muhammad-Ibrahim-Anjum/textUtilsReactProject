// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Text Utils" aboutText="About TextUtils"/>
    <div className="container my-5">
      <Textform heading="Enter Text Below"/>
    </div>
    </>
  );
}

export default App;
