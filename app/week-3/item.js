


export default function Item(props){
    return (
        <div className="bg-yellow-200 m-5 p-3 border-2 border-red-300 w-100 rounded">
            <ul className="text-amber-900 font-sans">
                <li className="text-xl">Name: {props.name}</li>
                <li>Buy {props.quantity} in {props.category}</li>
            </ul>
        </div>
    );
}