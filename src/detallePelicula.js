
/*
import './Detallepelicula.css';
*/
import Calidad from './Calidad';

export default function Detallepelicula( props ) {
return (
<div className="container-fluid bg-dark text-light">{/* root-listapelicula */}
<div className="row pt-3">

<div className="col">
<img src={props.caratula} alt="portada de pelicula" width="100%" />

{/* col */}</div>


<div className="col">
<h1 className="text-danger text-uppercase fs-3">
{props.titulo}
</h1>
<p className="fs-5">
Para público de {props.edad} años en adelante.
<br />Genero: {props.genero}
</p>
<br /><Calidad n={props.estrellas} />
</div>{/* col */}

{/* row */}</div>
{/* root-Detallepelicula */}</div>
);
}

