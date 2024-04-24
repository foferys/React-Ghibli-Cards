import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import {useSelector} from "react-redux";
import {Outlet, Link } from "react-router-dom";

function CardsChildren() {
    const contents = useSelector((state) => state.movies.value);

    return (
        <>
            <Navbar></Navbar>
            <h1>
                pagina con tutte le cards
            </h1>
            <div className='flex flex-row gap-10 flex-wrap justify-center'>
                {
                //-> tutto lo stato dell'elemento delle card 
                contents.map((el) => ( //possiamo aggiungere .filter( (el) => el.isVisited) // .filter() filtra gli elementi indicati
                    //passiamo i valori dell'oggetto come props al componente Card.jsx
                    <Link to={`/cards/${el.id}`} key={el.id}>
                    
                        <CardItem key={el.id} img={el.img} title={el.tit} descr={el.desc} isVisited={el.isVisited}>
                            <br />
                            {//verifica se c'è un valore child e lo stampa in quel punto
                                el.child?<p className='text-xs'>*{el.child}</p>:""
                            } 
                        </CardItem>
                    </Link>
                ))
                }
            </div>
            <Outlet />
        </>
    );
}

export default CardsChildren;