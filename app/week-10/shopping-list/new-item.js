"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const incButtonStyle =
    quantity >= 20
      ? "bg-gray-400 text-white p-2 rounded"
      : "bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600";

  const decButtonStyle =
    quantity <= 1
      ? "bg-gray-400 text-white p-2 rounded"
      : "bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 m-4 w-50 border-2 border-black rounded-lg bg-gray-300"
    >
      <div className="mb-4">
        <label className="block font-bold mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 bg-white rounded w-full"
          placeholder="item name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Quantity:</label>
        <div className="flex items-center gap-2">
          <button type="button" onClick={decrement} className={decButtonStyle}>
            –
          </button>
          <span className="px-4 py-2 border rounded bg-white">{quantity}</span>
          <button type="button" onClick={increment} className={incButtonStyle}>
            +
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border bg-white p-2 rounded w-full"
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

      <button
        type="submit"
        className="mt-3 w-full p-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Add Item
      </button>
    </form>
  );
}
