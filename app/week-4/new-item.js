"use client"
import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(1);

    const increment =  () => {
        let currentCount = count.valueOf();
        if (currentCount <= 19) {
            setCount(currentCount + 1);
        }
    }
    const decrement = () => {
        let currentCount = count.valueOf();
        if (currentCount >= 2) {
            setCount(currentCount - 1);
        }
    }
    let incButtonStyle = "bg-blue-500 text-white p-2 m-2 rounded-lg";
    if (count >= 20) {
        incButtonStyle = "bg-gray-500 text-white p-2 m-2 rounded-lg";
    }
    let decButtonStyle = "bg-blue-500 text-white p-2 m-2 rounded-lg";
    if (count <= 1) {
        decButtonStyle = "bg-gray-500 text-white p-2 m-2 rounded-lg";
    }

    return(
        <main className="flex justify-center items-center h-screen bg-gray-400">
            <div className=" flex flex-row justify-center items-center m-4 bg-gray-300 max-w-sm border-2 border-black rounded-lg">
                <p className="p-2">{count}</p>
                <button onClick={decrement} className={decButtonStyle}>-</button>
                <button onClick={increment} className={incButtonStyle}>+</button>
                
            </div>
        </main>
    );





}