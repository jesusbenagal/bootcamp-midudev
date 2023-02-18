import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Counter = ({ contador }) => <h1>Contador: {contador}</h1>;

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => setContador(contador + 1);
  const handleClickReset = () => setContador(0);
  const handleClickDecrement = () => setContador(contador - 1);

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";

  return (
    <div>
      <Counter contador={contador} />
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickDecrement}>Decrementar</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
