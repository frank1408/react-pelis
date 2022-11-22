
/*
import './Calidad.css';
*/

export default function Calidad(props) {

let items = [];
for( let i = 0; i < props.n; i++ ){
items.push(
<i key={i*i*2} className="bi bi-star-fill"></i>
);
}

return ( <div>{/* Calidad */}
{items}
{/* Calidad */}</div>);
}

