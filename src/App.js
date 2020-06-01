import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import { trackPromise } from "react-promise-tracker";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import ErrorAcapit from "./components/ErrorAcapit/ErrorAcapit";

const numberFetchingCards = 4;

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
  const [openPopup, setOpenPopup] = useState(false);
  const [cardInPopup, setCardInPopup] = useState({});

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

  const handlerButtonMore = () => {
    const newNumber = number + numberFetchingCards;
    setNumber(newNumber);
    setUrl(`https://api.pokemontcg.io/v1/cards?pageSize=${newNumber}`);
    setActualType("All");
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

  const handlerCardClick = (id) => {
    const card = allCards.filter((card) => card.id === id);
    setOpenPopup(true);
    setCardInPopup(card);
  };

  const handlerClosePopup = () => {
    setOpenPopup(false);
  };
  const handlerKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpenPopup(false);
    }
  };
  const showArray = inputValue ? showingCard : allCardsOneType;

  const cards = showArray.map((card) => (
    <Card key={card.id} onClick={handlerCardClick} {...card} />
  ));

  const typeButtons = typesName.map((type, id) => (
    <Button
      key={id}
      nameClass="button--smaller"
      text={type}
      onClick={handlerButtonTypes}
      name={type}
      actualType={actualType}
      id={id}
    />
  ));

  const showPopup = openPopup && (
    <Popup
      card={cardInPopup}
      onClick={handlerClosePopup}
      onKeyDown={handlerKeyDown}
    />
  );

  const showTypeButtons = !isLoading && !error && (
    <div className="catalog__buttons-wrapper">
      <Button
        nameClass="button--smaller"
        text="All"
        name="All"
        onClick={handlerButtonTypes}
        actualType={actualType}
      />
      {typeButtons}
    </div>
  );

  const ButtonMore = !inputValue && !isLoading && !error && (
    <Button
      onClick={handlerButtonMore}
      text={`Load ${numberFetchingCards} more cards`}
      nameClass="button-more"
      actualType={actualType}
    />
  );

  const errorInfo = error && <ErrorAcapit />;

  return (
    <div className="catalog">
      <Header inputValue={inputValue} handlerInput={handlerInput} />
      {showTypeButtons}
      {showPopup}
      <div className="catalog__cards">{cards}</div>
      <LoadingIndicator />
      {ButtonMore}
      {errorInfo}
    </div>
  );
};

export default App;
