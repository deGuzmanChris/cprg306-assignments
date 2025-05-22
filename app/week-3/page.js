import ItemList from "./item-list";

export default function Page() {
    return (
        <main className= "bg-gray-400">
            <h1 className="text-4xl font-bold font p-5">Shopping List</h1>
            <ItemList flex-column></ItemList>
        </main>
    );
}