import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import CarouselImg from "../components/Carosello";

/* vista card dettaglio */
function Card() {

    const {cardID} = useParams();
    // console.log(cardID);
    const contents = useSelector((state) =>
        state.movies.value.filter((el) => el.id == cardID.toString())
    );
    // console.log(contents);

    return(
        <>
            <Navbar></Navbar>
            <h1 className="mb-4">{contents[0].tit}</h1>
            <span className="mb-4 text-purple-600">
                {contents[0].child? '*'+contents[0].child : ""}
            </span>
            <span className={contents[0].isVisited?"text-lime-700 mb-4": "text-red-400 mb-4"}>
                {contents[0].isVisited?"Watched": "to watch"}
            </span>
        
            {  
                // verifico se esiste un array di immaini in quel film specifico
                contents[0].imgarr
                ?
                //se esiste passo l'array di url del film come props al componente carousel. 
                <CarouselImg urls={contents[0].imgarr} ></CarouselImg>
                : 
                // altrimenti mostro l'immagine singola
                <img className="rounded-xl" src={contents[0].img} alt="" width={800}/>
            }
            {/* <img src={contents[0].img} alt="" width={800}/> */}
            <p className="text-black">{contents[0].desc}</p>
            
        </>
    )

}

export default Card;