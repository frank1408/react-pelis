
import Arriba from './Arriba';
import Abajo from './Abajo';
import Listapelicula from './Listapelicula';
import arraypeliculas from './infoPeliculas.json';

export default function Peliculasite() {

return (
<div className="container-fluid bg-dark text-light">{/* root-peliculasite */}

<Arriba />

{/* recorrer array y desplegar sus datos */}
{
arraypeliculas.map(
	lapeli =>
		<Listapelicula
			titulo={lapeli.titulo}
			caratula={lapeli.caratula}
			genero={lapeli.genero}
			edad={lapeli.edad}
		/>/* Listapelicula */
) /* arraypeliculas.map */
}

<Abajo />

{/* root-peliculasite */}</div>
);
}

