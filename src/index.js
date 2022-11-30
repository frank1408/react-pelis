import React from 'react';
import ReactDOM from 'react-dom/client';
import Website from './Website';
import Pagpeliculas from './Pagpeliculas';
import Error from "./Error";
import "./index.css";

import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

const routerr = createBrowserRouter([
{
path: "/",
element: <Website/>,
errorElement: <Website><Error /></Website>,
},
{
path: "/peliculas",
element: <Website><Pagpeliculas /></Website>
},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={routerr} />
</React.StrictMode>
);

