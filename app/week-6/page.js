import ItemList from "./item-list";


export default function Page(props){
    return (
        <main className="bg-orange-100 p-5">
            <h1 className="text-amber-950 text-4xl font-serif pl-25">Shopping List</h1>
            <ItemList />
        </main>
    );
}