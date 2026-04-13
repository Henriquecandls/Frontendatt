import { useRef, useState } from "react";

function RefHook() {
  const ref = useRef<number>(0);
  const [counter, setCounter] = useState<number | null>(null);

  function handleClick() {
    ref.current = ref.current + 1;
    setCounter(ref.current);
    console.log("You clicked " + ref.current + " time(s)!");
    alert("You clicked " + ref.current + " time(s)!");
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" placeholder={counter ?? ""} />
    </>
  );
}

export default RefHook;