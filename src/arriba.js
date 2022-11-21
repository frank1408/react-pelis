
import './Arriba.css';
/*
import logo from './logo.svg';
*/

export default function Arriba() {
return (
<div className="Arriba">{/* root-Arriba */}

<header className="ht-header">
	<div className="container">
	<nav className="navbar navbar-default navbar-custom">
	
	<div className="navbar-header logo">
	<a href="https://google.com"><img className="logo" src="images/logo.png" alt="logo-empresarial" width="108" /></a>
	</div>
	
	
	<div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
	<ul className="nav navbar-nav flex-child-menu menu-left">
	
	
	<li className="dropdown first">
		<a href="https://google.com"
		className="btn btn-default dropdown-toggle lv1"
		data-toggle="dropdown"
		data-hover="dropdown">Peliculas</a>
	{/*
	<ul className="dropdown-menu level1">
	<li className="dropdown">
	<a href="https://google.com" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
	<ul className="dropdown-menu level2">
	<li><a href="moviegrid.html">Movie grid</a></li>
	<li><a href="moviegridfw.html">movie grid full width</a></li>
	</ul>
	</li>			
	<li><a href="movielist.html">Movie list</a></li>
	<li><a href="moviesingle.html">Movie single</a></li>
	<li className="it-last"><a href="seriessingle.html">Series single</a></li>
	</ul>
	*/}
	</li>
	
	
	
	<li className="dropdown first">
		<a href="https://google.com"
		className="btn btn-default dropdown-toggle lv1"
		data-toggle="dropdown"
		data-hover="dropdown">Series</a>
	</li>
	</ul>
	</div>
	</nav>
	</div>
</header>

{/* root-Arriba */}</div>);
}
/* export default Arriba; */

