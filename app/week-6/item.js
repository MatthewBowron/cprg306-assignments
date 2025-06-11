


export default function Item({itemObj}){
    
    let {name, quantity, category} = itemObj

    return (
        <div className="bg-yellow-200 m-3 mt-1 px-3 py-2 border-1 border-red-700 w-100 rounded">
            <ul className="text-amber-900 font-sans">
                <li className="text-xl font-medium">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}