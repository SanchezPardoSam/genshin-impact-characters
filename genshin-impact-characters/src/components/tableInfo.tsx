import { Constellation } from "../models/constellation";
import { PassiveTalent } from "../models/pasiveTalent";

export type infoTable = {
  title: string;
  encabezado_1: string;
  encabezado_2: string;
  encabezado_3: string;
  encabezado_4: string;
  data: PassiveTalent[] | Constellation[];
};

export function TableInfo({
  title,
  encabezado_1,
  encabezado_2,
  encabezado_3,
  encabezado_4,
  data,
}: infoTable) {
  return (
    <div>
      <h2>{data.length == 0 ? "" : title}</h2>
      <table border={1}>
        <tr>
          <th>{data.length == 0 ? "" : encabezado_1}</th>
          <th>{data.length == 0 ? "" : encabezado_2}</th>
          <th>{data.length == 0 ? "" : encabezado_3}</th>
          <th>{data.length == 0 ? "" : encabezado_4}</th>
        </tr>
        {data.map((fila) => {
          return (
            <tr>
              <td>{fila.level}</td>
              <td>{fila.name}</td>
              <td>{fila.unlock}</td>
              <td>{fila.description}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
