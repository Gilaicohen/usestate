import { useState } from "react";
function Counter(props) {
    const {delta} = props;
    const {maxNumber} = props;
    const [count, setCount]= useState(0);
       

    function incr(){

        setCount(
            function(oldCount){
                if((oldCount +delta)< maxNumber){
                 return oldCount +delta;
            }
            else{ return 0}
        }
        )   
    }
    function reset(){
        setCount(0) 
    }
     


    return (
      <div>
       <h1>Counter</h1>
       
       <p><div class="button">{count}</div></p>
       <button class="button"  onClick={incr}>Click to add {delta} to counter.</button> <p></p>
       <button class="button"  onClick={reset}>Reset counter</button>
      </div>
    );
} 
  
  
  export default Counter;