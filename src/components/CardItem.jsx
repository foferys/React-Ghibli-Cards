/* SINGOLA CARD */
import gsap from "gsap";
import { useEffect, useRef } from "react";



function CardItem({img, title, descr, isVisited, children}) {

    const myCard = useRef(null);

    useEffect(() => {
        gsap.to(myCard.current, {
            opacity:1,
            duration:.7,
            ease: "power2.out",
        })
    }, []);
    
    /* se si fa cosi quando è false non viene proprio visualizzato */
    //if(!isVisited) return null
    return (
     
        <div ref={myCard} className="singleCard rounded-md bg-zinc-950 overflow-hidden" style={{width: "270px", background:"#202025" }}>

            <div className="h-200" style={{height: "150px", width:"100%"}}>
                <img style={{objectFit:"cover", height:"100%", width:"100%"}} src={img} alt="" />
            </div>

            <div className="flex flex-col p-5">
                <h2 className='font-white font-bold'>{title}</h2>
                <p className='text-gray-500'>{descr}</p>

                {children}
            
                <span className={isVisited?"text-green-200": "text-red-400"}>{isVisited?"Watched": "to watch"}</span>
            
                {/* in questo modo usando && dove è impostato lo visualizza altrimenti lascia vuoto */}
                {/* {isVisited && <span className="text-green-200">Visitata</span>} */}
                
            </div>
        </div>
 
    )
}


export default CardItem;