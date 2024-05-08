// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';
import About from './components/About';
import React, {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }

    const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#383737';
      showAlert("Dark Mode enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode enable","success");
    }
  }


 
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" AboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
        <Routes>

              <Route exact path="/about" element={<About mode={mode}/>}></Route>
              <Route exact path='/' element={<TextForm showAlert={showAlert } heading="Enter Your Text for analyze below" mode={mode}/>}>

              </Route>
              {/* <Route exact path="/">
                <TextForm showAlert={showAlert  } heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
              </Route> */}
        </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;