import { useState } from "react";
import GifFetcher from "./GifFetcher";
import Data from "./Datas";

const initialCards = [
  {
    id: 1,
    name: "Stuart",
    img: "/images/stuart.jfif",
  },
  {
    id: 2,
    name: "Ivysaur",
    img: "/images/pokemon4.jfif",
  },
  {
    id: 3,
    name: "Venusaur",
    img: "/images/minion3.jfif",
  },
  {
    id: 4,
    name: "Charmander",
    img: "/images/minion4.jfif",
  },
  {
    id: 5,
    name: "Charmeleon",
    img: "/images/minion5.jfif",
  },
  {
    id: 6,
    name: "Charizard",
    img: "/images/minion6.jfif",
  },
  {
    id: 7,
    name: "Squirtle",
    img: "/images/minion7.jfif",
  },
  {
    id: 8,
    name: "Wartortle",
    img: "/images/minion8.jfif",
  },
  {
    id: 9,
    name: "Blastoise",
    img: "/images/minion9.jfif",
  },
  {
    id: 10,
    name: "Caterpie",
    img: "/images/minion10.jfif",
  },
  {
    id: 11,
    name: "Metapod",
    img: "/images/minion11.jfif",
  },
  {
    id: 12,
    name: "Butterfree",
    img: "/images/pokemon2.png",
  },
  {
    id: 13,
    name: "Weedle",
    img: "/images/minions13.jfif",
  },
  {
    id: 14,
    name: "Kakuna",
    img: "/images/pokemon.jfif",
  },
  {
    id: 15,
    name: "Beedrill",
    img: "/images/pokemon1.jfif",
  },
];

//function to implement the fischer-Yates shuffle method

const shuffle = (cards) => {
  const shuffled = [...cards];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Cards() {
  const [cards, setCards] = useState(() => shuffle(initialCards));
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  const handleImgClick = (card) => {
    //shuffleCards as the page is refreshed
    const nextCards = shuffle(cards);
    setCards(nextCards);

    //if image has been clicked already, reset current score and clicked cards ELSE increment current score

    if (clickedCards.includes(card.id)) {
      setScore(0);
      setClickedCards([]);
      return;
    }
    const nextScore = score + 1;
    setClickedCards([...clickedCards, card.id]);
    setScore(nextScore);
    if (nextScore > bestScore) {
      setBestScore(nextScore);
    }
    if (nextScore === initialCards.length) {
      alert("Congratulations! You've clicked all images without repeating! 🎉🎉🎉");
      setScore(0);
      setClickedCards([]);
    }
  };

  return (
    <>
      <Data score={score} bestScore={bestScore} />

      <GifFetcher cards={cards} onCardClick={handleImgClick} />
    </>
  );
}
