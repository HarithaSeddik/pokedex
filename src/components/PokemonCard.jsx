import React ,{useContext} from "react";
import { PokemonContext } from "./PokemonContext";


const PokemonCard = ({
  id,
  image,
  name,
  type,
  weight,
  height,
  ability,
  _callback,
}) => {
  const style = type + " thumb-container";
  useContext(PokemonContext)

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <div className="Card__data Card__data--weight">
          <p className="title">
            Weight : {weight}  <br/><br/>
            Height :{height} <br/><br/>
            Ability : {ability} <br />
            <br />{" "}
          </p>
        </div>
      </div>

      <button> CAPTURE POKEMON</button>
    </div>
  );
};

export default PokemonCard;
