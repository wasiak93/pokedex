import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

const App = () => {
  const [cardsArray, setCardsArray] = useState([]);
  const [number, setNumber] = useState(4);
  const [url, setUrl] = useState(
    `https://api.pokemontcg.io/v1/cards?pageSize=${number}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const fetchData = useCallback(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something gone wrong");
        }
        return response.json();
      })
      .then((data) => {
        setCardsArray([...data.cards]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlerButton = () => {
    const newNumber = number + 4;
    setNumber(newNumber);
    setUrl(`https://api.pokemontcg.io/v1/cards?pageSize=${newNumber}`);
  };

  const handlerInput = (e) => {
    setInputValue(e.target.value);
  };

  const cards = cardsArray.map(
    ({ id, name, imageUrl, supertype, subtype, rarity, number }) => (
      <div key={id} className="card">
        <p className="card__acapit card__acapit--flex">
          <span className="card__span card__span--bigger">{name}</span>
          Nr: {number}
        </p>
        <img src={imageUrl} alt="pokemon" className="card__img" />
        <p className="card__acapit">
          <span className="card__span">Superttype: </span>
          {supertype}
        </p>
        <p className="card__acapit">
          <span className="card__span">Subtype: </span> {subtype}
        </p>
        <p className="card__acapit">
          <span className="card__span">Rarity: </span> {rarity}
        </p>
      </div>
    )
  );
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">
          Pokemon <span className="header__span">catalog</span>
        </h1>
        <div className="input--wrapper">
          <input
            type="text"
            value={inputValue}
            className="header__input"
            onChange={handlerInput}
            placeholder="Search"
          />
          <div className="input__line"></div>
        </div>
      </div>

      <div className="cards--wrapper">{cards}</div>
      {isLoading ? <p className="loader">"loading"</p> : null}
      <button className="button" onClick={handlerButton}>
        Load More
      </button>
    </div>
  );
};

export default App;
