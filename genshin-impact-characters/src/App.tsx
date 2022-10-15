import { useEffect, useState } from "react";
import { Character, List, seachcharacterAPI } from "./models/character";
import { HeaderCharacter } from "./components/header";

import "./App.css";
import { BodyInfo } from "./components/bodyInfo";
import { TableInfo } from "./components/tableInfo";

function App() {
  const [names, setNames] = useState([]);
  const [charactersInfo, setCharactersInfo] = useState<Character>();
  const [seach, setSeach] = useState<string>("");

  const seachCharacter = async () => {
    let result = await seachcharacterAPI(seach);
    setCharactersInfo(result);
  };

  useEffect(() => {
    fetch("https://api.genshin.dev/characters")
      .then((rest) => rest.json())
      .then((rest) => setNames(rest))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    seachCharacter();
  }, [seach]);

  return (
    <div className="App">
      <HeaderCharacter
        name={charactersInfo?.name ?? ""}
        title={charactersInfo?.title ?? ""}
        rarity={charactersInfo?.rarity?.toString() ?? ""}
        birthday={charactersInfo?.birthday?.toString().slice(5) ?? ""}
        constellation={charactersInfo?.constellation ?? ""}
        data={{ names, seach, setSeach }}
      />

      <BodyInfo
        vision={charactersInfo?.vision ?? ""}
        weapon={charactersInfo?.weapon ?? ""}
        nation={charactersInfo?.nation ?? ""}
        affiliation={charactersInfo?.affiliation ?? ""}
        description={charactersInfo?.description ?? ""}
      ></BodyInfo>
      <TableInfo
        title="Skill Talents"
        encabezado_1="Name"
        encabezado_2="Unclock"
        encabezado_3="Type"
        encabezado_4="Description"
        data={charactersInfo?.skillTalents ??  []}
      />
    </div>
  );
}

export default App;
