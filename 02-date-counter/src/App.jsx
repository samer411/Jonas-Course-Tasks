import { useState } from "react";
import "./App.css";
export default function App() {
  return <Counter />;
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  const[date,setDate] =useState(new Date());
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div className="stpes flex justify-center items-center m-5">
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => setSteps((s) => s - 1)}
        >
          -
        </button>
        <p className="m-3">Steps:{steps}</p>
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => setSteps((s) => s + 1)}
        >
          +
        </button>
      </div>

      <div className="counter flex justify-center items-center m-5">
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => {
            setCount((c) => c - steps);
            setDate((currentDate) =>{  
              const nextDate = new Date(currentDate);
              nextDate.setDate(nextDate.getDate()-steps)
              return nextDate;
              });
          }}
        >
          -
        </button>
        <p className="m-3">Counter:{count}</p>
        <button
          className="bg-amber-200 rounded-xl p-3 cursor-pointer"
          onClick={() => {
            setCount((c) => c + steps);
           setDate((currentDate) =>{  
              const nextDate = new Date(currentDate);
              nextDate.setDate(nextDate.getDate()+steps)
              return nextDate;
              });
          }}
        >
          +
        </button>
      </div>

      <div className="date">
        <p>
          This is {count} days to{" "}
          {date.toLocaleDateString("en-us", options).replace(/,/g, "")}
        </p>
      </div>
    </>
  );
}
