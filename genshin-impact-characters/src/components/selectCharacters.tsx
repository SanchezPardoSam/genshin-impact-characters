import { useState } from "react";

export type DataSelector = {
  names: string[];
  seach: string;
  setSeach: (name: string) => void;
};

export function SelectCharacter({ names, seach, setSeach }: DataSelector) {
  return (
    <select
      onChange={(event) => {
        setSeach(event.target.value);
      }}
      value={seach}
    >
      <option selected >
        Choose one
      </option>
      {names.map((name) => {
        return <option value={name}>{name}</option>;
      })}
    </select>
  );
}
