

import Arriba from './Arriba';
import Abajo from './Abajo';
import Detallepelicula from './Detallepelicula';
import Paginacion from './Paginacion';
import { useState } from 'react';
import arraypeliculas from './infoPeliculas.json';

export default function Website() {

const [paginaActual, setPaginaActual] = useState(1);
const [itemxpag, setItemxpag] = useState(2);
const [paginas, setPaginas] = useState(2);

let arr = arraypeliculas;

/*
setPaginas( arr.length / itemxpag );
*/

let pp = [2];
pp[0] = arr.slice(0, 2);
pp[1] = arr.slice(2, arr.length);

return (
<div className="container-fluid bg-dark text-light">{/* root-peliculasite */}

<div className="row">
	<Arriba />
{/* row */}</div>


<div className="row">
<Paginacion
	pagina={paginaActual}
	key={paginaActual}
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

pp[paginaActual-1].map(
/* arraypeliculas.map( */
	lapeli =>
		<Detallepelicula
			key={lapeli.id}
			titulo={lapeli.titulo}
			caratula={lapeli.caratula}
			genero={lapeli.genero}
			edad={lapeli.edad}
			estrellas={lapeli.estrellas}
		/>/* detallePelicula */
) /* arraypeliculas.map */
}
{/* row */}</div>




<div className="row">
<Paginacion
	pagina={paginaActual}
	key={paginaActual}
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

