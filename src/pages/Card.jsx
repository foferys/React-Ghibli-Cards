import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import CarouselImg from "../components/Carosello";
import { useEffect } from "react";

/* vista card dettaglio */
function Card() {

    //useParams() va a premdere il parametro {cardID} che si trova dopo lo slash / nell'url.
    //il nome della variabile {cardID} deve essere uguale al nome del parametro indicato nella route
    //queste variabili sono indicate nel route e il loro valore è quello passato tramite Link in cardItem
    const {cardID, altroParametro} = useParams();
    // console.log(cardID);
    // console.log(altroParametro);

    //prendo lo stato dei film usando useSelector e lo filtro per l'id che abbiamo. Questo mi da un array con un solo
    //valore quindi giu posso usare movies[0]
    const movies = useSelector((state) =>
        state.movies.value.filter((el) => el.id == cardID.toString())
    );
    // console.log(movies);

    //uso useffect senza dipendenze per far si che effettua lo spostamento al div ogni volta che si clicca sulla singola cardItem
    useEffect(() => {
        const goHere =document.querySelector("#filmInterno");
        goHere.scrollIntoView({behavior: "smooth"});
     
    } )
 
    

    return(
        <>
            <Navbar></Navbar>
            <h1 id="filmInterno" className="mb-4 mt-5">{movies[0].tit}</h1>
            <span className="mb-4 text-purple-600">
                {movies[0].child? '*'+movies[0].child : ""}
            </span>
            <span className={movies[0].isVisited?"text-lime-700 mb-4": "text-red-400 mb-4"}>
                {movies[0].isVisited?"Watched": "to watch"}
            </span>
        
            {  
                // verifico se esiste un array di immaini in quel film specifico
                movies[0].imgarr
                ?
                //se esiste passo l'array di url del film come props al componente carousel. 
                <CarouselImg urls={movies[0].imgarr} ></CarouselImg>
                : 
                // altrimenti mostro l'immagine singola
                <img className="rounded-xl" src={movies[0].img} alt="" width={800}/>
            }
            {/* <img src={movies[0].img} alt="" width={800}/> */}
            <p className="text-black">{movies[0].desc}</p>
            
        </>
    )

}

export default Card;