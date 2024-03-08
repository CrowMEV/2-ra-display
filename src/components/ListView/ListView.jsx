import ShopItem from "../ShopItem/ShopItem";
import "./ListView.css";

export default function ListView({ cards }) {
  return (
    <div className="cards-list">
      {cards.map((card, idx) => {
        return <ShopItem card={card} key={idx + card.name} />;
      })}
    </div>
  );
}
