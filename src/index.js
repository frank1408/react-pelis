import React from 'react';
import ReactDOM from 'react-dom/client';
import Website from './Website';
import Pagpeliculas from './Pagpeliculas';
import Pagportadas from './Pagportadas';
import Error from "./Error";
import "./index.css";

/* para enrutamiento */
import {
createBrowserRouter,
RouterProvider,
Route,
} from "react-router-dom";
/* para enrutamiento */

const routerr = createBrowserRouter([
{
path: "/",
element:
<Website>
<Pagpeliculas />
</Website>
,
errorElement: <Error />,
},/* root */
{
path: "/peliculas",
element: 
<Website>
<Pagportadas />
</Website>
},/* peliculas */
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={routerr} />
</React.StrictMode>
);

