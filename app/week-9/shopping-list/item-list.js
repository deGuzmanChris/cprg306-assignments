"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Defensive: ensure items is always an array
  const sortedItems = Array.isArray(items)
    ? [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
        return 0;
      })
    : [];

  return (
    <div>
      {/* Sort Buttons */}
      <div className="p-4 m-4 flex">
        <button
          onClick={() => setSortBy("name")}
          className={`p-2 m-2 border-2 border-black rounded-r-lg hover:bg-indigo-200 ${
            sortBy === "name" ? "bg-indigo-300" : "bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 m-2 border-2 border-black rounded-r-lg hover:bg-indigo-200 ${
            sortBy === "category" ? "bg-indigo-300" : "bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Item List */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // click triggers parent handler
          />
        ))}
      </ul>
    </div>
  );
}
