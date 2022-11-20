
import './Listapelicula.css';
/*
import logo from './logo.svg';
*/

export default function Listapelicula( props ) {
return (
<div className="Listapelicula">{/* root-listapelicula */}
<div className="movie-item-style-2">
<img src={props.caratula} alt="caratula de pelicula" />
<div className="mv-item-infor">

<h6>
<a href="moviesingle.html">
{props.titulo}
</a>
</h6>

<p className="rate">
{props.estrellas}
<i className="ion-android-star"></i>
<i className="ion-android-star"></i>
<i className="ion-android-star"></i>
</p>


<p className="describe">
{props.descripcion}
</p>


<p className="run-time">
Duracion: {props.duracion} Clasificacion: {props.clasificacion} Estreno: {props.fechaestreno}
</p>


<p>
Director: <a href="https://google.com">{props.director}</a>   Protagonista: <a href="https://google.com">{props.protagonista}</a>
</p>


</div>
</div>

{/* root-listapelicula */}</div>
);
}
/* export default Listapelicula; */

