
import Arriba from './Arriba';
import Abajo from './Abajo';
import Detallepelicula from './Detallepelicula';
import Paginacion from './Paginacion';
import arraypeliculas from './infoPeliculas.json';
import { useState } from 'react';

export default function Website() {

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




<Paginacion
	pagina={paginaActual}
	key={paginaActual}
	total={4}
	onChange={ (ppagina) => {
			setPaginaActual(ppagina)
		}
	}
/>




<div className="row">
<Abajo />
{/* row */}</div>

{/* root-Website */}</div>
);
}

