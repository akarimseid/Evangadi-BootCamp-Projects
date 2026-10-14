import { useEffect, useState } from "react";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    alert("Component is mounted");
  }, []);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={increaseCount}>Increase</button>
      <p>Count: {count}</p>
    </>
  );
}

export default UseEffectForTitle;
