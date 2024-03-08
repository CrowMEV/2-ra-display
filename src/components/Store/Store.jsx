import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import ListView from "../ListView/ListView";
import CardView from "../CardsView/CardsView";

export default function Store({ products }) {
  const [icon, setIcon] = useState("view_list");

  return (
    <>
      <IconSwitch
        icon={icon}
        onSwitch={() =>
          icon === "view_list" ? setIcon("view_module") : setIcon("view_list")
        }
      />
      {icon === "view_list" ? (
        <ListView cards={products} />
      ) : (
        <CardView cards={products} />
      )}
    </>
  );
}
