"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className= "bg-gray-400 p-6">
      <h1 className="text-2xl font-bold mb-4"> Shopping List</h1>

      {/* Add Item Form */}
      <NewItem onAddItem={handleAddItem} />

      {/* Items List */}
      <ItemList items={items} />
    </main>
  );
}
