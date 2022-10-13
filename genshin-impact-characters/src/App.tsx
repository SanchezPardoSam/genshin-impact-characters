import { useEffect, useState } from "react";

import "./App.css";
import { List } from "./respository/charactersData";

function App() {

  const [names, setNames] = useState([]);


  useEffect(() => {
    fetch("https://api.genshin.dev/characters")
      .then((rest) => rest.json())
      .then((rest) => setNames(rest))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <div id="result">
        {names.map((name) => {
          return <List name={name}></List>;
        })}
      </div>
    </div>
  );
}

export default App;
