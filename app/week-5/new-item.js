
"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  let incButtonStyle =
    quantity >= 20
      ? "bg-gray-500 text-white p-2 m-1 rounded-lg cursor-not-allowed"
      : "bg-blue-500 text-white p-2 m-1 rounded-lg hover:bg-blue-600";

  let decButtonStyle =
    quantity <= 1
      ? "bg-gray-500 text-white p-2 m-1 rounded-lg cursor-not-allowed"
      : "bg-blue-500 text-white p-2 m-1 rounded-lg hover:bg-blue-600";

  const handleNewItem = (event) => {
    event.preventDefault();

    const newItem = {
      name: itemName,
      quantity,
      category,
    };

    if (onAddItem) onAddItem(newItem);

    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <main className="flex justify-center items-center mt-6">
      <form
        onSubmit={handleNewItem}
        className="bg-gray-100 border-2 border-black rounded-lg p-6 w-full max-w-md shadow-md"
      >
        {/* Item Name */}
        <div className="mb-4">
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item name"
            required
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Quantity and Category Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          {/* Quantity Control */}
          <div className="flex items-center justify-center bg-gray-200 border rounded-lg p-2">
            <button type="button" onClick={decrement} className={decButtonStyle}>
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button type="button" onClick={increment} className={incButtonStyle}>
              +
            </button>
          </div>

          {/* Category Select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border p-2 rounded w-full"
          >
            <option disabled value="">
              Category
            </option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-2 w-full rounded-lg hover:bg-green-600"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}
