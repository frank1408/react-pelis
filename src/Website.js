

import Arriba from './Arriba';
import Abajo from './Abajo';
import Detallepelicula from './Detallepelicula';
import Paginacion from './Paginacion';
import { useState } from 'react';
import arr from './infoPeliculas.json';

export default function Website() {

const [paginaActual, setPaginaActual] = useState(1);
const [itemxpag, setItemxpag] = useState(3);
const [paginas, setPaginas] = useState( Math.ceil(arr.length / itemxpag) );

let inicio = 0;
if( paginaActual == 1 ){
	inicio = 0;
}
if( paginaActual == 2 ){
	inicio = 3;
}
if( paginaActual == 3 ){
	inicio = 6;
}
let arr2 = arr.slice( inicio, itemxpag * paginaActual );

return (
<div className="container-fluid bg-dark text-light">{/* root-peliculasite */}

<div className="row">
	<Arriba />
{/* row */}</div>


<div className="row">
<Paginacion
	pagina={paginaActual}
	key={"arriba"}
	total={paginas}
	onChange={ (ppagina) => {
			setPaginaActual(ppagina)
		}
	}
/>
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

