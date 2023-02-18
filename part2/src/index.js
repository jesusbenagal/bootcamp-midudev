import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const WarningNotUsed = () => <h1>No se ha usado el contador</h1>;

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const INITIAL_STATE = {
  left: 0,
  right: 0,
};

const App = () => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);
  const [counters, setCounters] = useState(INITIAL_STATE);

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
    });
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {
    setCounters(INITIAL_STATE);
    setClicks([]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      {counters.right}
      <p>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
