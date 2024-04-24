//importiamo increment e decrement creati nel file js
import { increment, decrement } from "../redux/counterSlice";
//importiamo anche useSelector e useDispatch:
//con useSelector consumiamo un valore mentre con useDispatch diciamo voglio essere in grado di mandare ordini di modifica
import { useSelector, useDispatch } from "react-redux"; //_> useSelector e useDispatch sono hooks 

function Contatore() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div className="text-black">
            <p>Conteggio: {count}</p>
            <button className="text-white mb-3" 
                onClick={()=> dispatch(decrement())}>
                Decrementa -
            </button>
            <button className="text-white mb-3" 
                onClick={() => dispatch(increment())}>
                Incrementa +
            </button>
        </div>
    );
}

export default Contatore;