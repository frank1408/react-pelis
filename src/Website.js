

import React from 'react';
import Arriba from './Arriba';
import Abajo from './Abajo';
import Detallepelicula from './Detallepelicula';
import Paginacion from './Paginacion';
import { useState } from 'react';
import arr from './infoPeliculas.json';
/*
import ReactDOM from 'react-dom/client';
*/

export default function Website() {


const [paginaActual, setPaginaActual] = useState(1);
/*
const [informacion, setInformacion] = useState( [] );
... setInformacion( arr );
*/
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
<div className="container-fluid bg-dark text-light">{/* root-peliculasite */}

<div className="row">
	<Arriba />
{/* row */}</div>



<div className="row">
<div className="col">
	<Paginacion
		pagina={paginaActual}
		key={"arriba"}
		total={paginas}
		onChange={ (ppagina) => {
				setPaginaActual(ppagina);
			}
		}
	/>	
{/* col */}</div>
{/* row */}</div>


<div className="row">
{/* recorrer array y desplegar sus datos */}
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
{/* row */}</div>




<div className="row">
<Paginacion
	pagina={paginaActual}
	key={"abajo"}
	total={paginas}
	onChange={ (ppagina) => {
			setPaginaActual(ppagina)
		}
	}
/>
{/* row */}</div>




<div className="row">
	<Abajo />
{/* row */}</div>

{/* root-Website */}</div>
);
}

