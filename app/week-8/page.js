"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData || []);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [activeItem, setActiveItem] = useState(null); // for highlighting clicked item

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    setActiveItem(item.name);

    // Clean up item name: remove size and emoji
    let cleanedName = item.name
      .split(",")[0] // remove any quantity/size info
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className= "bg-gray-400 flex">
      <h1 className="text-4xl font-bold font p-5">Shopping List</h1>
      <div className="w-1/2 p-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          activeItem={activeItem}
        />
      </div>

      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
