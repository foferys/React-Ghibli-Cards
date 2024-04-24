import { configureStore } from "@reduxjs/toolkit";
import { contentsReducer } from "./contentsSlice";
import {counterReducer} from "./counterSlice";

export default configureStore({
    // i reduce gestiscono il cambio dello stato mandando fuori poi il nuovo risultato
    reducer: {
        counter: counterReducer,
        movies: contentsReducer,
    },
})