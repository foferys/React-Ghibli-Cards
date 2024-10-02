import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contatti from './pages/Contatti.jsx';
import About from './pages/About.jsx';
import Cards from './pages/Cards.jsx';
import Card from './pages/Card.jsx';
import CardsChildren from './pages/CardsChildren.jsx';

import store from "./redux/store";
import { Provider } from 'react-redux';

/* STRUTTURA PER MANDARE A SCHERMO I COMPONENTI COME  FOSSERO PAGINE */
//ARRAY DI OGGETTI per instradare le singole azioni/pagine
const rounter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>,
  },
  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    // quando clicclo sulla card singola, in CardItem.jsx ho messo un ternario che se mi trovo nella pagina delle cards rimanda a questo mapping che 
    //rimanderà alla pagina della singola card
    path: "/cards/:cardID",
    element: <Card />,
  },
  {
    /* in cards-children se  premiamo su una delle card all'interno abbiamo un altro percorso che viene aperto 
    nella stessa pagina inserendo il cardID-> perché su CardItem ho messo al Link "cards-children/id*/
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    //il figlio interno se si clicca
    children: [
      {
        path: ":cardID",
        element: <Card />,
      },
      {
        // esempio di come passo un altro parametro -> su cardItem ho messo al Link "cards-children/id/esempioParametro
        path: ":cardID/:altroParametro",
        element: <Card />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  //React.StrictMode lo abbiamo sempre avuto
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rounter} /> {/* RouterProvider è quello che si occupa dell'instradamento */}
    </Provider>
  </React.StrictMode>
);