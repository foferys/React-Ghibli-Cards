import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Contatti() {
    //ho preso direttamente il valore del counter usalndo useSelector, che lo pesca attraverso lo store e counterSlice
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina Contatti 🍜</h1>
            <p className="bg-black">
                il conteggio è arrivato a {count}
            </p>
            <p className="text-black">
                clicca per tornare alla <Link to={"/"}>Home</Link>   
            </p> 
        </>
    );
}

export default Contatti;