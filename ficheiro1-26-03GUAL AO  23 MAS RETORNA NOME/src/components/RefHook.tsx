import { useRef, useState } from "react";
import AlertComponent from "./alertComponent"
function RefHook() {
  const ref = useRef<number>(0);
  const [counter, setCounter] = useState<number | null>(null);
  let username=useRef("Eduardo");

  function handleClick() {
    ref.current = ref.current + 1;
    setCounter(ref.current);
    console.log("You clicked " + ref.current + " time(s)!");

    //aviso para colocar alert("You clicked " + ref.current + " time(s)!");
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" placeholder={counter ?? ""} />
       <AlertComponent username={username.current}/>
    </>
  );
}

export default RefHook;
