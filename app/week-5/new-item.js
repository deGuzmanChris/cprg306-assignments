"use client"
import { useState } from "react";

export default function Counter() {
    const [itemName,setItemName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [category,setCategory] = useState("Produce");


    const increment =  () => {
        let currentCount = quantity.valueOf();
        if (currentCount <= 19) {
            setQuantity(currentCount + 1);
        }
    }
    const decrement = () => {
        let currentCount = quantity.valueOf();
        if (currentCount >= 2) {
            setQuantity(currentCount - 1);
        }
    }
    let incButtonStyle = "bg-blue-500 text-white p-2 m-2 rounded-lg";
    if (quantity >= 20) {
        incButtonStyle = "bg-gray-500 text-white p-2 m-2 rounded-lg";
    }
    let decButtonStyle = "bg-blue-500 text-white p-2 m-2 rounded-lg";
    if (quantity <= 1) {
        decButtonStyle = "bg-gray-500 text-white p-2 m-2 rounded-lg";
    }

    const handleNameChange = (event) => {
        setItemName(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleNewItem = (event) => {
        event.preventDefault();
    
    
        alert("Added Item: " + itemName + ", Quantity: " + quantity + ", Category: " + category);
    
        setItemName("");
        setQuantity(1);
        setCategory("Produce");
    }
    
    let inputStyle ="flex flex-row justify-center items-center m-4 bg-gray-300 max-w-sm border-2 border-black rounded-lg";

    return(
        <main className="flex justify-center items-center h-screen bg-gray-400">
            <form onSubmit={handleNewItem} className="">
                <div>
                    <input
                        type="text"
                        value={itemName}
                        onChange={handleNameChange}
                        placeholder="Item name"
                        className={inputStyle}
                        required
                    />
                </div>

                <div className={inputStyle}>
                    <p className="p-2">{quantity}</p>
                    <button type="button" onClick={decrement} className={decButtonStyle}>-</button>
                    <button type="button" onClick={increment} className={incButtonStyle}>+</button>
                </div>

                <div>
                    <select
                        onChange={handleCategoryChange}
                        value={category}
                        className={inputStyle}
                        required
                    >
                        <option disabled value="">Category</option>
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
                <div>
                    <button
                        type="submit"
                        className={inputStyle}
                    >+</button>
                </div>
            </form>
        </main>
    );





}