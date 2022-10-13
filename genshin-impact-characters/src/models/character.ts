import { SkillTalent } from "./skillTalent"
import { PasiveTalent } from "./pasiveTalent"
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
    pasiveTalents: PasiveTalent[];
    constellations: Constellation[];
    visionKey: string;
    weaponType: string;
}