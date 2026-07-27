import { useState } from "react";
import "./App.css";
export default function App() {
  return <Counter />;
}

function Counter() {
  const [steps, setSteps] = useState(0);
  const [count, setCount] = useState(1);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [startDate] = useState(() => new Date());
  const date = new Date(startDate);
  date.setDate(date.getDate() + steps * count);
  return (
    <>
      <div className="count flex justify-center">
        <input
          type="range"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
          min={0}
          max={10}
          name="steps"
          id="steps"
        />
        <p className="m-2">{count}</p>
      </div>

      <div className="counter flex justify-center items-center m-5">
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => setSteps((s) => s - count)}
        >
          -
        </button>
        <input
          type="text"
          name="counter"
          id="counter"
          onChange={(e) => setSteps(Number(e.target.value))}
          value={steps}
          className="border-2 rounded-2xl p-2 m-2"
        />
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => {
            setSteps((s) => (s = s + count));
          }}
        >
          +
        </button>
      </div>

      <div className="date">
        <p>
          {steps == 0
            ? "Today is"
            : steps > 0
              ? `${steps} from`
              : `${Math.abs(steps)} to`}{" "}
          {date.toLocaleDateString("en-us", options).replace(/,/g, "")}
        </p>
      </div>
      {(count > 1 || steps !== 0) && (
        <div className="reset">
          <button
            className="m-3 px-5 py-2 bg-gray-300 rounded-2xl cursor-pointer"
            onClick={() => {
              setCount(1);
              setSteps(0);
            }}
          >
            reset
          </button>
        </div>
      )}
    </>
  );
}
