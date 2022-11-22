
import Arriba from './Arriba';
import Abajo from './Abajo';
import Listapelicula from './Listapelicula';
import Paginacion from './Paginacion';
import arraypeliculas from './infoPeliculas.json';
import { useState } from 'react';

export default function Peliculasite() {

const [paginaActual, setPaginaActual] = useState(1);

return (
<div className="container-fluid bg-dark text-light">{/* root-peliculasite */}
<div className="row">
<Arriba />
{/* row */}</div>

<div className="row">
{/* recorrer array y desplegar sus datos */}
{
arraypeliculas.map(
	lapeli =>
		<Listapelicula
			titulo={lapeli.titulo}
			caratula={lapeli.caratula}
			genero={lapeli.genero}
			edad={lapeli.edad}
			estrellas={lapeli.estrellas}
		/>/* Listapelicula */
) /* arraypeliculas.map */
}
{/* row */}</div>




<Paginacion
	pagina={paginaActual}
	total={4}
	onChange={ (ppagina) => {
			setPaginaActual(ppagina)
		}
	}
/>




<div className="row">
<Abajo />
{/* row */}</div>

{/* root-peliculasite */}</div>
);
}

