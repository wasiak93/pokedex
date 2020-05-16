import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import LoadingIndicator from "./LoadingIndicator";
import { trackPromise } from "react-promise-tracker";
import Button from "./components/Button";
import Card from "./components/Card/Card";

const numberFetchingCards = 500;

const App = () => {
  const [allCards, setAllCards] = useState([]);
  const [allCardsOneType, setAllCardsOneType] = useState([]);
  const [showingCard, setShowingCard] = useState([]);
  const [typesName, setTypesName] = useState([]);

  const [number, setNumber] = useState(numberFetchingCards);
  const [url, setUrl] = useState(
    `https://api.pokemontcg.io/v1/cards?pageSize=${number}`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [actualType, setActualType] = useState("All");

  const fetchData = useCallback(() => {
    setIsLoading(true);
    trackPromise(
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            setError(true);
            throw Error("Something gone wrong");
          }
          return response.json();
        })
        .then(({ cards }) => {
          const cardsWithTypes = cards.filter(({ types }) => types);
          const typesArray = cardsWithTypes.map(({ types }) => types[0]);
          const uniqTypesArray = [...new Set(typesArray)];

          setError(false);
          setAllCards([...cardsWithTypes]);
          setAllCardsOneType([...cardsWithTypes]);
          setShowingCard([...cardsWithTypes]);
          setIsLoading(false);
          setTypesName(uniqTypesArray);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
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
    let newCards = allCardsOneType.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setShowingCard([...newCards]);
    setInputValue(value);
  };

  const handlerButtonTypes = (name) => {
    setActualType(name);

    const cards = allCards.filter((card) => card.types[0] === name);
    switch (name) {
      case "All":
        setAllCardsOneType(allCards);
        if (inputValue) {
          let newCards = allCards.filter((card) =>
            card.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setShowingCard([...newCards]);
        }
        break;
      default:
        setAllCardsOneType(cards);
        if (inputValue) {
          let newCards = cards.filter((card) =>
            card.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setShowingCard([...newCards]);
        }
    }
  };
  const showArray = inputValue ? showingCard : allCardsOneType;
  const cards = showArray.map((card) => <Card key={card.id} {...card} />);

  const typeButtons = typesName.map((type, id) => (
    <Button
      key={id}
      nameClass="catalog__button--smaller"
      text={type}
      onClick={handlerButtonTypes}
      name={type}
      actualType={actualType}
      id={id}
    />
  ));
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
              inputValue ? "header__line header__line--color" : "header__line"
            }
          ></div>
          <div className="header__input-subtitle">{inputValue && "Search"}</div>
        </div>
      </div>
      {!isLoading && !error ? (
        <div className="catalog__buttons-wrapper">
          <Button
            nameClass="catalog__button--smaller"
            text="All"
            name="All"
            onClick={handlerButtonTypes}
            actualType={actualType}
          />
          {typeButtons}
        </div>
      ) : null}
      <div className="catalog__cards">{cards}</div>
      <LoadingIndicator />
      {!inputValue && !isLoading && !error ? (
        <Button
          onClick={handlerButton}
          text={`Load ${numberFetchingCards} more cards`}
        />
      ) : null}
      {error && <p className="error">Ooooops, something gone wrong</p>}{" "}
    </div>
  );
};

export default App;
