import { useState } from "react";
import { ContainerInfo, CustomHeader } from "../customs/header.customs";
import { DataSelector, SelectCharacter } from "./selectCharacters";

type Props = {
  name: string;
  title: string;
  rarity: string;
  constellation: string;
  birthday: string;
  data: DataSelector;
};

export function HeaderCharacter({
  name,
  title,
  rarity,
  constellation,
  birthday,
  data,
}: Props) {
  return (
    <CustomHeader>
      <div className="containner__info">
        <div className="container__info-character">
          <ContainerInfo>
            <div className="info__constellation">
              <h1 className="info__name">{name}</h1>
              <p className="birthday">{birthday}</p>
              <p className="constellation">{constellation}</p>
            </div>

            <h3 className="info__title">{title != "" ? "(" +title + ")" : "" }</h3>
            <h3 className="info__rarity">{rarity == "4" ? "⭐⭐⭐⭐" : rarity == "5" ? "⭐⭐⭐⭐⭐" :""}</h3>
          </ContainerInfo>
        </div>
      </div>

      <div className="container__selection">
        <SelectCharacter
          names={data.names}
          seach={data.seach}
          setSeach={data.setSeach}
        />
      </div>
    </CustomHeader>
  );
}
