import { useState } from "react";

//question 3
function IncreaseDecreaseCount() {
  
    const [count, setCount] = useState(0);
    
    function increaseCount (){
    setCount(count + 1);
  }

//   function increaseCount() {
//     setCount((previousCount) => previousCount + 1);
//   }

  function decreaseCount (){
    setCount(count - 1);
  }
  

 function resetCount (){
    setCount(0);
 }
    return (
      <>
        <p> Count: {count}</p>

        <button onClick={increaseCount}>Increase</button>
         <button onClick ={decreaseCount}>Decrease</button>
         <button onClick={resetCount}>Reset</button>

      </>
    );
}

export default IncreaseDecreaseCount