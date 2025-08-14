"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  
  async function loadItems() {
    if (!user) return;
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }


  useEffect(() => {
    loadItems();
  }, [user]);


  const handleAddItem = async (newItem) => {
    if (!user) return;
    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    setActiveItem(item.name);

    let cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-gray-400 flex min-h-screen">
      <h1 className="text-4xl font-bold p-5">Shopping List</h1>
      <div className="w-1/2 p-4">
        {!user && <p>Please log in to manage your shopping list.</p>}
        {user && (
          <>
            <NewItem onAddItem={handleAddItem} />
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
              activeItem={activeItem}
            />
          </>
        )}
      </div>

      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
