import { SkillTalent } from "./skillTalent"
import { PasiveTalent } from "./pasiveTalent"
import { Constellation } from "./constellation";
import { useState } from "react";

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
    pasiveTalents: PasiveTalent[];
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