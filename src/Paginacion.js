
import { useState } from 'react';
/* import './Paginacion.css'; */

export default function Paginacion(props) {

const [paginactual, setPaginactual] = useState(1);

const getPaginas = () => { const resultado = [];
for( var i = 0; i < props.total; i++ ){
let lapagina = i + 1;  resultado.push(
	<a onClick={ () => { props.onChange(lapagina) }}
	className={ props.pagina === lapagina ? "text-danger text-decoration-none" : "text-light text-decoration-none"}
	key={i}>
	{lapagina}
	</a>
);} return resultado;
} /* getPaginas */


return (
<div className="container-fluid bg-dark text-light fs-5">{/* root-Paginacion */}
<div className="row text-center p-5">

<div className="col">
Paginas: {getPaginas()}
{/* col */}</div>

{/* row */}</div>
{/* root-Paginacion */}</div>);
}


