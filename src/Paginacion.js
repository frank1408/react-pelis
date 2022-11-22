
import { useState } from 'react';
import './Paginacion.css';

export default function Paginacion(props) {

const [paginactual, setPaginactual] = useState(1);

const getPaginas = () => { const resultado = [];
for( var i = 0; i < props.total; i++ ){
let lapagina = i + 1;  resultado.push(
	<a onClick={ () => { props.onChange(lapagina) }}
	className={ props.pagina === lapagina ? "p-3 text-danger text-decoration-none" : "p-3 text-light text-decoration-none"}
	key={i}>
	PAG {lapagina}
	</a>
);} return resultado;
} /* getPaginas */


return (
<div className="container-fluid bg-black text-light">{/* root-Paginacion */}
<div className="row text-center p-3">

<div className="col fs-4">
{getPaginas()}
{/* col */}</div>

{/* row */}</div>
{/* root-Paginacion */}</div>);
}


