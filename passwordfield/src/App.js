import { useState } from 'react';
import Password from './Password';
import './App.css';



function App() {

  const[isable,setisable]=useState(true)
  const [input, setInput] = useState("");
  function handleChange(e){
   setInput(e.target.value) ///מכניס ערך לתוך האינפוט
  }
  function handlesetisable(x){
    setisable(x)
  }
  //<p>password {input}</p>  
  return (
    <div className="App">
      <h1>Welcome</h1>  
      <p><h3>Please enter password:</h3></p>
      <input type = "string" value = {input} onChange = {handleChange}/>

      <button  disabled={isable} >Submit</button> 
      
      <Password input={input} handlesetisable={handlesetisable}/>
      

    </div>
  );
}



  
  export default App;