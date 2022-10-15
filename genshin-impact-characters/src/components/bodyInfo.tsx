import { useState } from "react";

export type dataBody = {
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  description: string;
};

export function BodyInfo({
  vision,
  weapon,
  nation,
  affiliation,
  description,
}: dataBody) {
  return (
  <div>
    <div className="subcontainer__one" >
        <p className="vision">{vision}</p>
        <p className="vision">{weapon}</p>
    </div>
    <div className="subcontainer__two">
        <p className="nation">{nation}</p>
        <p className="affiliation">{affiliation}</p>
    </div>
    <p className="description">{description}</p>
  </div>
  );
}
