import { useState, useContext } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { add } from "../redux/contentsSlice";

function CardForm() { //->abbiamo la props riferita alla funzione
    // dispatch per
    const dispatch = useDispatch(); 

    // impostiamo i valori dei campi della form a vuoto (negli imput value abbiamo -> value={form.tit} ecc)
    const [form, setForm] = useState({
        img: "",
        tit: "",
        desc: "",
        isVisited: false
    })

    //potremmo avere una gestione del change per ogni valore)
    //aggiorniamo lo state
    const handleInputChange = (e) => {
        //prendo tutti i valori
        const {name, value, type, checked} = e.target; 
        //dobbiamo aggiornare l'oggetto con il value o col checked in base a quello che è:
        const inputValue = (type == "checkbox")? checked : value
        //richiamiamo la funzione dello stato, inseriamo i valori gia presenti e riassegniamo i valori
        //a seconda di cosa è name e a quella chiave imposta il valore di inputValue -> es. [ descr : messaggio scritto in input ]
        setForm({...form, [name]: inputValue})
        console.log("name: "+name, "-value: "+value,"-type: "+ type, "-checked: "+ checked);
    }

    //definiamo cosa deve fare la funzione e la impostiamo all'avvenuto submit della form
    const handleSubmit = (e)=> {
        e.preventDefault() //-> evitiamo l'invio della form
        const elemento = { 
            id: Math.random(),
            img: form.img,
            tit: form.tit,
            desc: form.desc,
            isVisited: form.isVisited,
        };

        // aggiungo l'elemento tramite il dispatch -> add si trova in contetesSlice
        dispatch(add(elemento));

        //riazzero i valori degli input altrimenti rimangono anche dopo l'aggiunta della card
        setForm({img: "",
        tit: "",
        desc: "",
        isVisited: false });

    }


    /* relatico al contextAPI che uso per il conteggio anche qui */
    // const {count, setCount} = useContext(ProvaContext);
    const count = useSelector((state) => state.counter.value)

    return(
        <form onSubmit={handleSubmit} action="" className="formina flex flex-col gap-3 w-80 mb-10 justify-center mx-auto rounded-xl">
            <div>
                <b>Counter: {count}</b>
            </div>
            {/* <input type="number" name="id" hidden /> */}
            <input className="pl-3" name="img" type="text" value={form.img} onChange={handleInputChange} placeholder="url image" />
            <input className="pl-3" name="tit" type="text" value={form.tit} onChange={handleInputChange} placeholder="Title" />
            <textarea className="pl-3" name="desc" value={form.desc} onChange={handleInputChange} placeholder="Description"></textarea>
            <span>
                <label htmlFor="isVisited">Watched? </label>
                <input className="pl-3" name="isVisited" type="checkbox" onChange={handleInputChange} checked={form.isVisited}/>
            </span>
            <button className="border-green-200" type="submit">Add Ghibli Card</button>
        </form>
    )
}


export default CardForm;