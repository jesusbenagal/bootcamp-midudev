import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Este es el primer componente</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="blue" message="En un curso" />
      <Mensaje color="yellow" message="De React" />
      <Description />
    </div>
  );
};

export default App;
