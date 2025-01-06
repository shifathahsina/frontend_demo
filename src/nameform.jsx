import { useState,useRef } from "react";
function NameForm ()
{
    
    let [inputValue, setInputValue] = useState("Shifa");
  let prevInputValue = useRef("");

  let handleChange = (e) => {
    prevInputValue.current = inputValue; 
    setInputValue(e.target.value); 
    console.log("Previous Value:", prevInputValue.current);
    
  };
    
    return(
        <>
        <div>
            <label>Name</label>
            <input type="text" id="name" onChange={handleChange}/>
            <button onClick={()=>setName(inputValue)}>Change</button>
            <h1>Name : {inputValue}</h1>
            
        </div>
        </>
    )
}
export default NameForm;



 