import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Contatti() {

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