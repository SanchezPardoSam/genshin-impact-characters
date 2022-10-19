import { SkillTalent } from "./skillTalent"
import { PassiveTalent } from "./pasiveTalent"
import { Constellation } from "./constellation";

export interface Character {
    name: string;
    title: string;
    vision: string;
    weapon: string;
    nation: string;
    affiliation: string;
    rarity: number;
    constellation: string;
    birthday: string;
    description: string;
    skillTalents: SkillTalent[];
    passiveTalents: PassiveTalent[];
    constellations: Constellation[];
    visionKey: string;
    weaponType: string;
}

export const seachcharacterAPI = async (value : string) =>{
  var url = 'https://api.genshin.dev/characters/' + value

  const rest = await fetch(url);
  const data = await rest.json();
  return data as Character;
}

export const List = ({name} : {name:string}) => {
    return (
      <div className="col-4 my-2">
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    );
  };