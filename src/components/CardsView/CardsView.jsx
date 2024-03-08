import ShopCard from "../ShopCard/ShopCard";
import "./CardsView.css";

export default function CardView({ cards }) {
  return (
    <div className="cards">
      {cards.map((card, idx) => {
        return <ShopCard card={card} key={idx + card.name} />;
      })}
    </div>
  );
}
