
import './Arriba.css';

export default function Arriba() {
return (
<div className="container-fluid bg-black text-center text-light p-3">{/* root-Arriba */}

<a href="/index.html" className="text-decoration-none" >
<img src="images/logo.png" alt="logo" height="54px" />
</a>

<a href="https://google.com" className="link-danger text-decoration-none text-light fs-3  ">Peliculas</a>
<a href="https://google.com" className="link-danger text-decoration-none text-light fs-3  ">Series</a>
<a href="https://google.com" className="link-danger text-decoration-none text-light fs-3  ">Genero</a>

{/* root-Arriba */}</div>);
}
/* export default Arriba; */
