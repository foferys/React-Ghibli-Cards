import { createSlice } from "@reduxjs/toolkit";

export const contentsSlice = createSlice({
    name: 'movies',
    initialState: {
        value: [
            {
                id:0,
                img: "https://www.ghibli.jp/gallery/howl040.jpg", 
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
        ],
    },
    reducers: {
        //abbiamo un unico reducer in questo caso per aggiugnere ma potremmo averne altri per rimuovere ecc
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const {add} = contentsSlice.actions;

export const contentsReducer = contentsSlice.reducer;