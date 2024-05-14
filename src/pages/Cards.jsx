import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//usare useLocation per avere il path della pagina
import { useLocation } from 'react-router-dom';


function Cards() {
    // lo state è salvato nel nostro store.js, e con useSelector per leggere,
    // va in contentsSlice che poi viene mappata e stampata sotto.
    //se volessimo usarlo anche in altre pagine besterebbe usare lo stesso import e la stessa variabile qua sotto e poi stampare il tutto come qui
    const contents = useSelector((state) => state.movies.value);
    //stampo anche il counter qui per prova
    const counter = useSelector((state)=> state.counter.value);
    // uso queste variabile per capire in che pagina sono e lo uso sotto
    const location = useLocation();
    const isHome = location.pathname=='/';


    return (
        <>
            {/* per non far comparire la home se siamo nella home perché altrimenti sarebbe ripetuta, la mostra se sono nella pagina delle cards */}
            {isHome? "":<Navbar></Navbar>}
            
            {isHome? <h1 className="homeTit mb-4">My Ghibli cards ❤️‍🩹</h1>:<h1 className="mb-4"> All Ghibli cards page - counter: {counter} </h1>}
            
            <div className='flex flex-row gap-10 flex-wrap justify-center'>
                {
                //-> tutto lo stato dell'elemento delle card 
                contents.map((el) => ( //possiamo aggiungere .filter( (el) => el.isVisited) // .filter() filtra gli elementi indicati
                
                    <div key={el.id} >
                        {/*passiamo i valori dell'oggetto come props al componente Card.jsx */}
                        <CardItem id={el.id} img={el.img} title={el.tit} descr={el.desc} isVisited={el.isVisited}>
                            <br />
                            {//verifica se c'è un valore child nell'oggetto degli elementi e lo stampa qui altrimenti non stampa nulla
                            el.child? <p className='text-xs'>*{el.child}</p> : ""
                        } 
                        </CardItem>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default Cards;