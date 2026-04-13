import { useState } from "react";

function Counter() {
  //counter state hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>Clicou no botão {count} vezes</div>
    </div>
  );
}

export default Counter;
