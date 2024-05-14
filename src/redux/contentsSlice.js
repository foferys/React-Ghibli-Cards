import { createSlice } from "@reduxjs/toolkit";

export const contentsSlice = createSlice({
    name: 'movies',
    initialState: {
        value: [
            {
                id:0,
                img: "https://www.ghibli.jp/gallery/howl040.jpg", 
                imgarr: [
                    "https://www.ghibli.jp/gallery/howl044.jpg", "https://www.ghibli.jp/gallery/howl008.jpg", "https://www.ghibli.jp/gallery/howl040.jpg","https://www.ghibli.jp/gallery/howl023.jpg",
                ],
                tit: "ハウルの動く城（2004）\nHowl's Moving Castle",
                desc: "© 2004 Diana Wynne Jones/Hayao Miyazaki/Studio Ghibli, NDDMT",
                isVisited: true
            },
            {
                id:1,
                img:"https://www.ghibli.jp/gallery/chihiro044.jpg", 
                imgarr: [
                    "https://www.ghibli.jp/gallery/chihiro044.jpg", "https://www.ghibli.jp/gallery/chihiro006.jpg","https://www.ghibli.jp/gallery/chihiro010.jpg",
                ],
                tit: "千と千尋の神隠し (2001)\nSpirited Away",
                desc: "© 2001 Hayao Miyazaki/Studio Ghibli, NDDTM",
                isVisited: true,
                child: "Favorite ❤️‍🩹"
            },
            {
                id:2,
                img:"https://www.ghibli.jp/gallery/mononoke049.jpg", 
                tit: "もののけ姫（1997)\nPrincess Mononoke",
                desc: "© 1997 Hayao Miyazaki/Studio Ghibli, ND",
                isVisited: false
            },
            {
                id:3,
                img:"https://www.ghibli.jp/gallery/majo018.jpg", 
                tit: "魔女の宅急便（1989\nKiki's Delivery Service",
                desc: "© 1989 Eiko Kadono/Hayao Miyazaki/Studio Ghibli, N",
                isVisited: true
            },
            {
                id:4,
                img:"https://www.ghibli.jp/gallery/totoro024.jpg", 
                imgarr: [
                    "https://www.ghibli.jp/gallery/totoro024.jpg", "https://www.ghibli.jp/gallery/totoro025.jpg","https://www.ghibli.jp/gallery/totoro029.jpg","https://www.ghibli.jp/gallery/totoro019.jpg",
                ],
                tit: "となりのトトロ（1988)\nMy Neighbor Totoro",
                desc: "© 1988 Hayao Miyazaki/Studio Ghibli",
                isVisited: true,
                child: "prefe",
            },
        ],
    },
    reducers: {
        //abbiamo un unico reducer in questo caso per aggiugnere ma potremmo averne altri per rimuovere ecc
        //action fa riferimento al valore che gli viene passato quando viene chiamato(un numero, un array ecc)
        add: (state, action) => {
            state.value.push(action.payload)
        },
        deleteContent: (state, action) => {
            /* 
            La condizione if viene valutata in base al valore restituito da findIndex, ma questo metodo restituisce -1 
            se l'elemento non viene trovato nell'array. Tuttavia, se l'elemento viene trovato come primo elemento 
            dell'array, findIndex restituirà 0 e, Poiché in JavaScript il valore 0 viene considerato come un valore 
            falso all'interno di una condizione if, il blocco di codice all'interno di if(indice) non verrà eseguito 
            quando l'elemento da eliminare si trova alla prima posizione dell'array se non mettiamo >= 0.
            */
            const indice = state.value.findIndex(item => item.id == action.payload);
         
            if(indice>= 0) {
                console.log(indice);
                state.value.splice(indice, 1);
            }
           
            /* state.value.delete() */
        }
    },
})

export const {add, deleteContent} = contentsSlice.actions;

export const contentsReducer = contentsSlice.reducer;