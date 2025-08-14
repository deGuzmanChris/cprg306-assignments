export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="p-2 m-4 bg-gray-300 max-w-sm border-2 border-black rounded-r-lg hover:bg-indigo-200 cursor-pointer"
      onClick={onSelect} // <-- click handler
    >
      <ul>
        <li>
          <h2 className="text-2xl border-black font-semibold">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
        </li>
      </ul>
    </div>
  );
}
