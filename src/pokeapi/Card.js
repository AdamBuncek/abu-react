import React from "react";
import TypeColors from "./TypeColors";
import useStyles from "../styles";

function Card({pokemon}) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.card__img}>
        <img src={pokemon.sprites.front_default} alt=""/>
      </div>
      <div className={classes.card__name}>{pokemon.name}</div>
      <div className={classes.card__types}>
        {pokemon.types.map((type) => {
          return( 
            <div key={type.type.name} className={classes.card__type} style={{backgroundColor: TypeColors[type.type.name]}}>
              {type.type.name}
            </div>
            )
        })}
      </div>
      <div className={classes.card__info}>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <p>Ability: {pokemon.abilities[0].ability.name}</p>
      </div>
    </div>
  );
}

export default Card;