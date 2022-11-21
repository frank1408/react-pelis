
import './Peliculasite.css';
import Listapelicula from './componentes/Listapelicula/Listapelicula';
import Arriba from './Arriba';
import Abajo from './Abajo';
import Centro from './Centro';
import arraypeliculas from './infoPeliculas.json';
/*
import logo from './logo.svg';
*/


export default function Peliculasite() {

{/*
const arraypeliculas = [
{
"titulo": "resident evil",
"descripcion": "En un centro clandestino de investigación genética, se produce un virus mortal. Para contener la fuga, se cierra toda la instalación y se cree que mueren todos los empleados, pero en realidad se convierten en zombis.",
"duracion": "1:59:18",
"clasificacion": "+18",
"fechaestreno": "2002-03-12",
"estrellas": 5,
"director": "Paul W. S. Anderson",
"protagonista": "Milla Jovovich",
"genero": "terror/accion",
"caratula": "https://i.blogs.es/c82453/cartel-resident-evil-el-capitulo-final/1366_2000.jpg"
},
{
"titulo": "no me sé ninguna",
"descripcion": "de miedo",
"duracion": "2:00:00",
"clasificacion": "+14",
"fechaestreno": "1957-08-27",
"estrellas": 5,
"director": "Gabi Rodriguez",
"protagonista": "Jacob Martinez",
"genero": "terror",
"caratula": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/fede-alvarez-evil-dead-2-uruguay-mundial/138102078-3-esl-ES/Fede-Alvarez-promete-hacer-Evil-Dead-2-si-Uruguay-gana-la-Copa-del-Mundo.jpg"
}
];
*/}



return (
<div className="Peliculasite">{/* root-peliculasite */}

<Arriba />

<Centro>

{/* recorrer array y desplegar sus datos */}
{
arraypeliculas.map(
	lapeli =>
		<Listapelicula
			titulo={lapeli.titulo}
			descripcion={lapeli.descripcion}
			duracion={lapeli.duracion}
			clasificacion={lapeli.clasificacion}
			fechaestreno={lapeli.fechaestreno}
			estrellas={lapeli.estrellas}
			director={lapeli.director}
			protagonista={lapeli.protagonista}
			genero={lapeli.genero}
			caratula={lapeli.caratula}
		/>/* Listapelicula */
) /* arraypeliculas.map */
}


</Centro>

<Abajo />


{/* root-peliculasite */}</div>
);
}
/*
export default Peliculasite;
*/

