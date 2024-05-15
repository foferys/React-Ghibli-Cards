/* SINGOLA CARD */
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContent } from "../redux/contentsSlice";



function CardItem({id, img, title, descr, isVisited, children, intern}) {

    //animazione gsap
    const myCard = useRef(null);

    useEffect(() => {
        gsap.to(myCard.current, {
            opacity:1,
            duration:.7,
            ease: "power2.out",
        })
    }, []);
    
    const dispatch = useDispatch()

    const handleDelete = () => {
        /* console.log(e.target.dataset.id) */
        dispatch(deleteContent(id));
    }
    
    /* se si fa cosi quando è false non viene proprio visualizzato */
    //if(!isVisited) return null
    return (
     
        <div ref={myCard} className="singleCard rounded-md bg-zinc-950 overflow-hidden" style={{width: "270px", background:"#202025" }}>
            {/* ternario che verifica se da cardItem viene passata la props intern che viene usata fare un altro reindirizzamanto */}
            <Link to={intern? `/cards-children/${id}`:`/cards/${id}` }>

                <div className="h-200 singleCardImg" style={{height: "150px", width:"100%"}}>
                    <img style={{objectFit:"cover", height:"100%", width:"100%"}} src={img} alt="" />
                </div>

            </Link>

            <div className="flex flex-col p-5">
                <h2 className='font-white font-bold'>{title}</h2>
                <p className='text-gray-500'>{descr}</p>

                {children}
            
                <span className={isVisited?"text-green-200": "text-red-400"}>{isVisited?"Watched": "to watch"}</span>
            
                {/* in questo modo usando && dove è impostato lo visualizza altrimenti lascia vuoto */}
                {/* {isVisited && <span className="text-green-200">Visitata</span>} */}
    
                {/* usiamo il dataset altrimenti non lo prende normalemnte prendendolo dalle props */}
                <button onClick={handleDelete} className="bg-red-600 text-white mt-4">Elimina</button>
            </div>
        </div>
 
    )
}


export default CardItem;