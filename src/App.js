import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, {useState} from 'react';  
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import Abc from './components/Abc';
import About from './components/About';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] =useState('light')
  const [bt, setBt] =useState("Enable Dark Mode")
  const [alert, setAlert] =useState(null)
  
const showAllert=(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2500);
}
  
  const clickbutton= ()=>{
      if(mode ==='light' ){
        setMode('dark')
        setBt("enable white mode")
        document.body.style.backgroundColor='#042743'
        showAllert("dark mode is activated", "warning")
      }
      else{
        setMode('light')
        setBt("enable dark mode")
        document.body.style.backgroundColor='white'
        showAllert("light mode is activated", "warning")
      }
}
  return (
    <>
    <Navbar
    title="Testutils"
    link="Connections"
    mode={mode}
    clickbutton={clickbutton}
    bt={bt}
  />
  <Alert alert={alert} />
  <div className="container my-4">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route
        path="/"
        element={
          <Textform
            showAllert={showAllert}
            heading="Enter the text here"
            mode={mode}
          />
        }
      />
    </Routes>
  </div>


     
    </>
  );
}

export default App;
