
/*
import './Listapelicula.css';
*/

export default function Listapelicula( props ) {
return (
<div className="container-fluid bg-dark text-light">{/* root-listapelicula */}
<div className="row">

<div className="col p-5">
<img src={props.caratula} alt="portada de pelicula" width="100%" />
{/* col */}</div>

<div className="col p-5">
<h1 className="text-uppercase fs-4">
{props.titulo}
</h1>
<p className="fs-5">
Para público de {props.edad} años en adelante.
<br />Genero: {props.genero}
</p>
{/* col */}</div>

{/* row */}</div>
{/* root-listapelicula */}</div>
);
}

