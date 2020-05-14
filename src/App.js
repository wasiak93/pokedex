import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import LoadingIndicator from "./LoadingIndicator";
import { trackPromise } from "react-promise-tracker";

const numberFetchingCards = 8;

const App = () => {
  const [cardsArray, setCardsArray] = useState([]);
  const [cardsArrayFilter, setCardsArrayFilter] = useState([]);
  const [number, setNumber] = useState(numberFetchingCards);
  const [url, setUrl] = useState(
    `https://api.pokemontcg.io/v1/cards?pageSize=${number}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const fetchData = useCallback(() => {
    setIsLoading(true);
    trackPromise(
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Something gone wrong");
          }
          return response.json();
        })
        .then(({ cards }) => {
          setCardsArray([...cards]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        })
    );
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlerButton = () => {
    const newNumber = number + numberFetchingCards;
    setNumber(newNumber);
    setUrl(`https://api.pokemontcg.io/v1/cards?pageSize=${newNumber}`);
  };

  const handlerInput = (e) => {
    const value = e.target.value;
    let newCards = cardsArray.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setCardsArrayFilter(newCards);
    setInputValue(value);
  };

  const cards = cardsArray.map(
    ({ id, name, imageUrl, supertype, subtype, rarity, number }) => (
      <div key={id} className="card">
        <p className="card__title">
          <span className="card__name">{name}</span>
          Nr: {number}
        </p>
        <img src={imageUrl} alt="pokemon" className="card__img" />
        <p className="card__type-name">
          <span className="card__type">Superttype: </span>
          {supertype}
        </p>
        <p className="card__type-name">
          <span className="card__type">Subtype: </span> {subtype}
        </p>
        <p className="card__type-name">
          <span className="card__type">Rarity: </span> {rarity}
        </p>
      </div>
    )
  );
  const cardsFilter = cardsArrayFilter.map(
    ({ id, name, imageUrl, supertype, subtype, rarity, number }) => (
      <div key={id} className="card">
        <p className="card__title">
          <span className="card__name">{name}</span>
          Nr: {number}
        </p>
        <img src={imageUrl} alt="pokemon" className="card__img" />
        <p className="card__type-name">
          <span className="card__type">Superttype: </span>
          {supertype}
        </p>
        <p className="card__type-name">
          <span className="card__type">Subtype: </span> {subtype}
        </p>
        <p className="card__type-name">
          <span className="card__type">Rarity: </span> {rarity}
        </p>
      </div>
    )
  );
  return (
    <div className="catalog">
      <div className="catalog__header header">
        <h1 className="header__title">
          Pokemon <span className="header__title--brown">catalog</span>
        </h1>
        <div className="header__container">
          <input
            type="text"
            value={inputValue}
            className="header__input"
            onChange={handlerInput}
            placeholder="Search"
          />
          <div
            className={
              inputValue ? "header__line header__line--red" : "header__line"
            }
          ></div>
          <div className="header__input-subtitle">{inputValue && "Search"}</div>
        </div>
      </div>

      <div className="catalog__cards">{inputValue ? cardsFilter : cards}</div>
      <LoadingIndicator />
      {!inputValue && !isLoading ? (
        <button className="catalog__button" onClick={handlerButton}>
          Load {numberFetchingCards} more cards
        </button>
      ) : null}
    </div>
  );
};

export default App;
