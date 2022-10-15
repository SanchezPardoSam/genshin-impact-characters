import { useState } from "react";
import { SkillTalent } from "../models/skillTalent";

export type dataTable = {
  title: string;
  encabezado_1: string;
  encabezado_2: string;
  encabezado_3: string;
  encabezado_4: string;
  data: SkillTalent[];
};

export function TableInfo({
  title,
  encabezado_1,
  encabezado_2,
  encabezado_3,
  encabezado_4,
  data,
}: dataTable) {
  return (
    <div>
      <h2>{data.length == 0 ? "" : title}</h2>
      <table>
        <tr>
          <th>{data.length == 0 ? "" : encabezado_1}</th>
          <th>{data.length == 0 ? "" : encabezado_2}</th>
          <th>{data.length == 0 ? "" : encabezado_3}</th>
          <th>{data.length == 0 ? "" : encabezado_4}</th>
        </tr>
        {data.map((fila) => {
          return (
            <tr>
              <td>{fila.name}</td>
              <td>{fila.unlock}</td>
              <td>{fila.type}</td>
              <td>{fila.description}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
