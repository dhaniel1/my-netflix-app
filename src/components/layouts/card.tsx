import React from "react";
import { Img } from "../shared";

const Card = ({ data }: IpropDiv) => {
  return (
    <div className="card">
      <Img className="card__img" src={data.img} />
      <h3>{data.header}</h3>
      <p className="card__description">{data.description}</p>
    </div>
  );
};

export default Card;
