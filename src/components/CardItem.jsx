
/* SINGOLA CARD */
function CardItem({img, title, descr, isVisited, children}) {
    
    /* se si fa cosi quando è false non viene proprio visualizzato */
    //if(!isVisited) return null
    return (
     
        <div className="rounded-md bg-zinc-950 overflow-hidden" style={{width: "170px", background:"#202025" }}>

            <div className="h-200" style={{height: "100px", width:"100%"}}>
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