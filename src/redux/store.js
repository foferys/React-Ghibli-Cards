import { configureStore } from "@reduxjs/toolkit";
//slice-> le singole parti di uno stato
import { contentsReducer } from "./contentsSlice"; //-> i vari film
import {counterReducer} from "./counterSlice";  //il counter

//configureStore è una funzione che esportiamo per poterla poi usare
/* la proprietà reducer contiene:
    il nome della proprietà dello stato con i reducer specifici
*/
export default configureStore({
    // i reduce gestiscono il cambio dello stato mandando fuori poi il nuovo risultato
    reducer: {
        counter: counterReducer,
        movies: contentsReducer,
    },
})