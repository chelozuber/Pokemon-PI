import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardsContainer from "../CardsContainer/CardsContainer";
import NotFound from "../NotFound/NotFound";
import style from "./Pagination.module.css";

const Pagination = () => {
  const allPokemons = useSelector((state) => state.pokemonFilter);
  const [page, setPage] = useState(1);
  const amount = 12;

  useEffect(() => {
    setPage(1); // Resetear la página a 1 cuando cambia el filtro de tipo de Pokémon
  }, [allPokemons]); // Ejecutar cada vez que cambie la lista de Pokémon filtrados

  const totalpages = Math.ceil(allPokemons.length / amount);

  const handleClick = (event) => {
    setPage(Number(event.target.value));
  };

  const buttonI = [];
  for (let i = 1; i <= totalpages; i++) {
    buttonI.push(i);
  }

  const paginatedPokemon = allPokemons.slice(
    (page - 1) * amount,
    page * amount
  );

  return (
    <div>
      <div className={style.main}>
        {buttonI.map((i) => (
          <button
            className={`${style.button} ${i === page ? style.selected : ""}`}
            key={i}
            value={i}
            onClick={handleClick}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        {allPokemons.length === 0 ? (
          <NotFound />
        ) : (
          <CardsContainer poke={paginatedPokemon} />
        )}
      </div>
    </div>
  );
};

export default Pagination;