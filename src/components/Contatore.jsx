//importiamo increment e decrement creati nel file js
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
//importiamo anche useSelector e useDispatch:
//con useSelector consumiamo (prendere un valore) mentre 
//con useDispatch diciamo voglio essere in grado di mandare ordini di modifica, non solo leggerlo
import { useSelector, useDispatch } from "react-redux"; //_> useSelector e useDispatch sono hooks 

function Contatore() {

    //useSelector fa riferimento allo store -> counter inftti si trova nello store
    const count = useSelector((state) => state.counter.value);
    //creo il dispatch per usare le funzioni decrement e increment(importate sopra) nelle funzioni in basso.
    const dispatch = useDispatch();


    return (
        <div className="text-black">
            <p>Tieni il conto! siamo a {count}</p>
            <div className="mt-3">

                <button className="bg-red-400 text-white mb-3 mr-4" 
                    onClick={()=> dispatch(decrement())}>
                    Decrementa -
                </button>
                <button className="bg-lime-600 text-white mb-3 mr-4" 
                    onClick={() => dispatch(increment())}>
                    Incrementa +
                </button>
                <button className="bg-lime-600 text-white mb-3" 
                    onClick={() => dispatch(incrementByAmount(5))}>
                    Incrementa di 5
                </button>
            </div>
        </div>
    );
}

export default Contatore;