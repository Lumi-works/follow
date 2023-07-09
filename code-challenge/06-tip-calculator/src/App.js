import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [price, setPrice] = useState("");
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);

  const tip = price * ((rate1 + rate2) / 2 / 100);

  function handleReset() {
    setPrice("");
    setRate1(0);
    setRate2(0);
  }

  return (
    <div>
      <Price price={price} onPrice={setPrice} />
      <Rate rate={rate1} onRate={setRate1}>
        How did you like the service?
      </Rate>
      <Rate rate={rate2} onRate={setRate2}>
        How did your friend like the service?
      </Rate>

      {price > 0 && (
        <>
          <Total price={price} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function Price({ price, onPrice }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill avaliable"
        value={price}
        onChange={(e) => onPrice(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Rate({ children, rate, onRate }) {
  return (
    <div>
      <label>{children}</label>
      <select value={rate} onChange={(e) => onRate(Number(e.target.value))}>
        <option value={1}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}> It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ price, tip }) {
  return (
    <div>
      <h3>
        You pay ${price + tip} (${price} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
