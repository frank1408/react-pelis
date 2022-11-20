
import './Peliculasite.css';
import Listapelicula from './componentes/Listapelicula/Listapelicula';
import Arriba from './Arriba';
import Abajo from './Abajo';
import Centro from './Centro';
/*
import logo from './logo.svg';
*/


export default function Peliculasite() {
return (
<div className="Peliculasite">{/* root-peliculasite */}

<Arriba />

<Centro>

<Listapelicula titulo="RESIDENT EVIL"      descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://i.blogs.es/c82453/cartel-resident-evil-el-capitulo-final/1366_2000.jpg"                                />
<Listapelicula titulo="X-MEN"              descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://super-ficcion.com/wp-content/uploads/2022/02/Como-ver-en-orden-las-peliculas-de-los-X-Men-780x470.jpg" />
<Listapelicula titulo="DESTINO FINAL"      descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://www.themoviedb.org/t/p/w500/yrQjtYmEsnc1hlDlXQZ29EMSFbp.jpg"                                           />
<Listapelicula titulo="RAPIDOS Y FURIOSOS" descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://static.cinepolis.com/resources/mx/movies/posters/414x603/34669-453300-20210622125843.jpg"              />

</Centro>

<Abajo />


{/* root-peliculasite */}</div>
);
}
/*
export default Peliculasite;
*/

