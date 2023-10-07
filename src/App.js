import { useState } from "react";
import DateObject from "react-date-object";

function App() {
  return (
    <div className="conteiner">
      <Counter date={new Date()} />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="conteiner-btn">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="conteiner-btn">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Counter: {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="display">
        <span>
          {count === 0 && "Today is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default App;
