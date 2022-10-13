import { useState } from "react";
import { Character } from "../models/character";


export const List = ({name} : {name:string}) => {
  return (
    <div className="col-4 my-2">
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  );
};
