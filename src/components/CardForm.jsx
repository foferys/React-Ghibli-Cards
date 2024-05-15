import { useState, useContext } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { add } from "../redux/contentsSlice";

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


    /* relatico al contextAPI che uso per il conteggio anche qui */
    // const {count, setCount} = useContext(ProvaContext);
    const count = useSelector((state) => state.counter.value)

    return(
        <>
        <form onSubmit={handleSubmit} action="" className="formina flex flex-col gap-3 w-80 mb-10 justify-center mx-auto rounded-xl">
            <div>
                <b>Counter: {count}</b>
            </div>
            {/* <input type="number" name="id" hidden /> */}
            <input className="pl-3" name="img" type="text" value={form.img} onChange={handleInputChange} placeholder="url image" required/>
            <input className="pl-3" name="tit" type="text" value={form.tit} onChange={handleInputChange} placeholder="Title" required />
            <textarea className="pl-3" name="desc" value={form.desc} onChange={handleInputChange} placeholder="Description" required></textarea>
            <span>
                <label htmlFor="isVisited">Watched? </label>
                <input className="pl-3" name="isVisited" type="checkbox" onChange={handleInputChange} checked={form.isVisited}/>
            </span>
            <button className="border-green-200" type="submit">Add Ghibli Card</button>
        </form>





        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
        </button>

        
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                  
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 





        </>
    )
}


export default CardForm;