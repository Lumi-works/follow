import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(5);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago
          was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 5 ? (
        <div>
          <button onClick={handleReset}>reset</button>
        </div>
      ) : null}
    </div>
  );
}
