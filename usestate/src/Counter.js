import { useState, useEffect} from "react";
function Counter(props) {
    const {delta,maxNumber,getReset,needToReset,getMax , maxValue} = props;
    const [count, setCount]= useState(0);
       
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    },[needToReset, getReset])
   useEffect(()=>{
        if(count>maxValue){
            getMax(count)
        }
   },[getMax,maxValue,count])
    function incr(){
        setCount(
            function(oldCount){
                if((oldCount +delta)< maxNumber){
                   // getMax(oldcount + delta)
                    return (oldCount +delta)
                
            
                 
            }
            else{ return 0}
        }
        )   
    }
    function reset(){
        //getReset(true)
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