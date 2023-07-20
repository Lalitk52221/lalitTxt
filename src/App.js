
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Text from './component/Text';
import Alert from './component/Alert';


function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showalert(null);
    }, 3000);
}

const togglemodeR=()=>{
    document.body.style.backgroundColor="#5e0a04"
    document.body.style.color='white'

}
const togglemodeG=()=>{
    document.body.style.backgroundColor="#024d07"
    document.body.style.color='white'

}
const togglemode=()=>{
  if (mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    showalert('Dark mode has been enabled',"success")
    document.title="Lalit Textutils - Dark Mode";
  //   setInterval(() => {
  //     document.title="Intall textutils is amazing mode"
  //   }, 2000);
  //   setInterval(() => {
  //     document.title="Intall textutils is now"
  //   }, 1100);
 }
  else{
    setmode('light')
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    showalert('light mode has been enabled',"success")
    document.title="Lalit TextUnils-light Mode"
  }
}

  return (
    <>
    <Navbar title='Lalit kumar' about='About' mode={mode} togglemode={togglemode} togglemodeR={togglemodeR} togglemodeG={togglemodeG}/>
    <Alert alert={alert}/>
    <Text showalert={showalert} heading='Enter your text' />
    <About/>
    </>
  );
}

export default App;
