import { useState, useContext } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { add } from "../redux/contentsSlice";
import React from "react";
// import dei materiali per i componenti tailwind
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

function CardForm() { //->abbiamo la props riferita alla funzione
    // dispatch per eseguire azioni/modifiche
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
        // console.log("name: "+name, "-value: "+value,"-type: "+ type, "-checked: "+ checked);
    }

    //definiamo cosa deve fare la funzione e la impostiamo all'avvenuto submit della form
    const handleSubmit = (e)=> {
        e.preventDefault() //-> evitiamo l'invio della form
        const elemento = { 
            id: Math.floor(Math.random() * (5-10000)+10000), //-> numero intero minimo 5 massimo 10000
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


    /* relativo al contextAPI che uso per il conteggio anche qui */
    // const {count, setCount} = useContext(ProvaContext);
    const count = useSelector((state) => state.counter.value)

    // in relazione ai componenti per la modale realizzata con tailwind material
    // Nel contesto della funzione handleOpen, current è una variabile che rappresenta lo stato corrente della variabile di stato open.
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((current) => !current);

    return(
        <>
        
       {/*  <form onSubmit={handleSubmit} action="" className="formina flex flex-col gap-3 w-80 mb-10 justify-center mx-auto rounded-xl">
            <div>
                <b>Counter: {count}</b>
            </div>
          
            <input className="pl-3" name="img" type="text" value={form.img} onChange={handleInputChange} placeholder="url image" required/>
            <input className="pl-3" name="tit" type="text" value={form.tit} onChange={handleInputChange} placeholder="Title" required />
            <textarea className="pl-3" name="desc" value={form.desc} onChange={handleInputChange} placeholder="Description" required></textarea>
            <span>
                <label htmlFor="isVisited">Watched? </label>
                <input className="pl-3" name="isVisited" type="checkbox" onChange={handleInputChange} checked={form.isVisited}/>
            </span>
            <button className="border-green-200" type="submit">Add Ghibli Card</button>
        </form> */}



        {/* form modale con tailwind */}
        <Button color="green" variant="gradient" className="flex items-center gap-3" onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5" >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
            </svg>
            Upload Movie
        </Button>

        <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">

            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Inserisci Film
                    </Typography>
                    <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
                        Inserisci tutti i dati richiesti
                    </Typography>

                    <form onSubmit={handleSubmit} action="" className="formina flex flex-col gap-3 w-80 mb-10 justify-center mx-auto rounded-xl">
                        <div>
                            <b className="text-white">Counter: {count}</b>
                        </div>
                        
                        <input className="pl-3" name="img" type="text" value={form.img} onChange={handleInputChange} placeholder="url image" required/>
                        <input className="pl-3" name="tit" type="text" value={form.tit} onChange={handleInputChange} placeholder="Title" required />
                        <textarea className="pl-3" name="desc" value={form.desc} onChange={handleInputChange} placeholder="Description" required></textarea>
                        <span>
                            <label className="text-white" htmlFor="isVisited">Watched? </label>
                            <input className="pl-3" name="isVisited" type="checkbox" onChange={handleInputChange} checked={form.isVisited}/>
                        </span>
                        {/* <button className="border-green-200" type="submit">Add Ghibli Card</button> */}
                        <Button variant="gradient" type="submit" fullWidth>
                            Add Movie
                        </Button>
                    </form>
            

                </CardBody>

                <CardFooter className="pt-0">
                   
                    <Typography variant="small" className="mt-4 flex justify-center">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            chiudi modale
                        </Button>
                    </Typography>
                </CardFooter> 
            </Card>
        </Dialog>
  



        </>
    )
}


export default CardForm;