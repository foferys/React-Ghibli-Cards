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
    reducers: {
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload; //-> il payload indica di quanto lo vuoi aumentare
        },
    },

})

//esportiamo le varie azioni
export const {increment, decrement, incrementByAmount} = counterSlice.actions
//esportiamo la funzione di reducer
export const counterReducer = counterSlice.reducer;