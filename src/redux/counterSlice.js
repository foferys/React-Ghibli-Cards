import { createSlice } from "@reduxjs/toolkit";

// una slice è una "fetta" -> in questo caso riguarda solo il counter
export const counterSlice = createSlice ({
    // nome della slice
    name: 'counter',
    // stato iniziale
    initialState: {
        value: 0,
    },
    // i reducer(forniti da toolkit) sono le azioni o fuznioni che andiamo a fare
    //prendono lo state (lo stato iniziale) e lo lavorano
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action) => { 
            /* (state, action): Il reducer accetta due argomenti:
            state: Rappresenta lo stato corrente del slice. Nel contesto di Redux Toolkit, lo stato è spesso un oggetto. 
            Per counterSlice, lo stato ha una proprietà value che rappresenta il valore attuale del contatore.
            action: L'oggetto azione che viene inviato al reducer. Oltre alla proprietà type che descrive il tipo di azione, 
            l'oggetto azione contiene anche una proprietà payload che trasporta i dati necessari per eseguire l'azione. */
            state.value += action.payload; //-> il payload indica di quanto lo vuoi aumentare
            //nel Contatore.jsx quando chiameremo incrementByAmount() tramite dispatch dovremo dicicare di quanto
        },
    },

})

//esportiamo le varie azioni
export const {increment, decrement, incrementByAmount} = counterSlice.actions
//esportiamo la funzione di reducer
export const counterReducer = counterSlice.reducer;