
/*
import './Detallepelicula.css';
*/

export default function Detallepelicula( props ) {
return (
<div className="container-fluid bg-dark text-light">{/* root-listapelicula */}
<div className="row p-5">

<div className="col">
<img src={props.caratula} alt="portada de pelicula" width="100%" />
{/* col */}</div>

<div className="col">
<h1 className="text-danger text-uppercase fs-3">
{props.titulo}
</h1>
<p className="fs-4">
Para público de {props.edad} años en adelante.
<br />Genero: {props.genero}
<br />Calificacion: {props.estrellas}
</p>
{/* col */}</div>

{/* row */}</div>
{/* root-Detallepelicula */}</div>
);
}

