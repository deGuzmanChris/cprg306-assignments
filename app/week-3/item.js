export default function Item({name,quantity,category}) {
    return (
        <div className= "p-2 m-4 bg-gray-300 max-w-sm border-2 border-black rounded-xl">
            <ul>
                <li>
                    <h2 className="text-2xl border-black">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Category: {category}</p>
                </li>
            </ul>
        </div>
    );
}