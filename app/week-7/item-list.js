"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Work with a copy of items to avoid mutation
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="p-4 m-4">
        <button
          onClick={() => setSortBy("name")}
           className={`p-2 m-4 max-w-sm border-2 border-black rounded-r-lg hover:bg-indigo-200 ${
            sortBy === "name" ? "bg-purple-300" : "bg-white"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
           className={`p-2 m-4 max-w-sm border-2 border-black rounded-r-lg hover:bg-indigo-200 ${
            sortBy === "category" ? "bg-purple-300" : "bg-white"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
