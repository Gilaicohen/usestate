import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1); 
  const [maxNumber, setMaxNum]= useState(1) ;
  const[reset,setReset]=useState(false)
  const[maxValue, setMaxValue] = useState(1)

  function handleDelta(event){
  console.log(event)
  setDelta(Number(event.target.value));

}
function handleMaxNum(event){
  setMaxNum(Number(event.target.value));
}   

function getReset(data){
  console.log(data)
  setReset(data)
} 

function getMax(data){
  console.log(data)
   setMaxValue(data)
}

  return (
    <div className="App">
     <h1 >UseState</h1>
     <h1>Maximum value is {maxValue}</h1>
     <p><h3>Enter counter :</h3></p>
     <p><input  type="number" value = {delta} onChange= {handleDelta}/></p>
     <p><h3>Enter maximum number:</h3></p>
     <p><input  type="number" value = {maxNumber} onChange= {handleMaxNum}/></p>
      <p></p>
      <Counter delta= {delta} maxNumber= {maxNumber} getReset = {getReset} needToReset = {reset} getMax={getMax} maxValue={maxValue}/>
     <Counter delta= {delta} maxNumber= {maxNumber} getReset = {getReset} needToReset = {reset} getMax={getMax} maxValue={maxValue}/>
     <Counter delta = {delta} numMax = {maxNumber} getReset = {getReset} needToReset = {reset} getMax = {getMax} maxValue={maxValue}/>
    </div>
    
  );  
  }
export default App;