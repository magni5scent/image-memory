const GifFetcher = ({ cards, onCardClick }) => {
  return (
    <div className="container">
      {cards.map((card) => {
        return (
          <div key={card.id} className="card">
            <h2>{card.name}</h2>
            <img
              src={card.img}
              alt={card.name}
              onClick={() => onCardClick(card)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GifFetcher;
