import { useEffect, useState } from "react";

// import { passwordfield } from "react";
function Password(props) {
  
  const {input,handlesetisable} = props;
  const[Strange,setStrange] = useState("");

  useEffect(()=>{
    if(input.length <=2){
        setStrange("Short password")
        handlesetisable(true)
      }
      else if(input.length <=6){
        setStrange("Medium password")
        handlesetisable(false)
      }
      else{setStrange("Strong password")}
      handlesetisable(false)
  } ,[setStrange,input,handlesetisable])
 
 
 /* function chackStrange(){
    if(input.length <=2){
      setStrange("Short password")
    }
    else if(input.length <=6){
      setStrange("Medium password")
      setisabl(false)
    }
    else{setStrange("Strong password")}
      setisabl(false)
  }*/
  return (
    <div>
    <h3>the password is{Strange} </h3>
   
    </div>
  );

}
export default Password;