import { count } from "console";
import {useState} from "react";

function Welcome() {
  const [name, setName] = useState("");
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default Welcome