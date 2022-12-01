
import React from 'react';
import { useState } from 'react';
/* import { useEffect } from 'react'; */
/* import ReactDOM from 'react-dom/client'; */

import Detallepelicula from './Detallepelicula';
import Paginacion from './Paginacion';
import arr from './infoPeliculas.json';

export default function Pagpeliculas() {

const [paginaActual, setPaginaActual] = useState(1);

const itemxpag = 3;
const paginas = Math.ceil(arr.length / itemxpag);

const getInicio = ( pagAct ) => {
	if( pagAct === 1 ){ return 0; }
	if( pagAct === 2 ){ return 3; }
	if( pagAct === 3 ){ return 6; }
} /* getInicio */


let arr2 = arr.slice(
	getInicio(paginaActual),
	itemxpag * paginaActual
);




return (
<div>
{
arr2.map(
	lapeli =>
		<Detallepelicula
			key={lapeli.id}
			titulo={lapeli.titulo}
			caratula={lapeli.caratula}
			genero={lapeli.genero}
			edad={lapeli.edad}
			estrellas={lapeli.estrellas}
		/>/* detallePelicula */
) /* array.map */
}

<Paginacion
	pagina={paginaActual}
	key={"abajo"}
	total={paginas}
	onChange={ (ppagina) => {
			setPaginaActual(ppagina)
		}
	}
/>

</div>);
}

