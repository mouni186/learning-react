import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [value, setvalue] = useState(0);
  const [name,setName] = useState("");
  const tutor = "Mounika";
  const [theRandomNumber,setTheRandomNumber] = useState(0);
  const randomNumberGenerator  = () => {
   const number =  Math.random();
   setTheRandomNumber(number);
  }
  return (
   <div>
      <h1>hello world</h1>
    <p>counter value:{value}</p>
    <p>{[name,theRandomNumber]}</p>
    <button onClick = {  randomNumberGenerator}>show my randomNumber</button>
    <button onClick = { () => setName(tutor)}>show my name</button>
    <button onClick = {() =>setvalue(value+1) }>+</button>
    <button onClick = {() =>setvalue(value-1) }>-</button>
   </div>
  );
}

export default App;
