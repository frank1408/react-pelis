
import './Peliculasite.css';
import Listapelicula from './componentes/Listapelicula/Listapelicula';
/*
import logo from './logo.svg';
*/


export default function Peliculasite() {
return (
<div className="Peliculasite">{/* root-peliculasite */}

<div className="login-wrapper" id="login-content">
<div className="login-content">
<a href="https://google.com" className="close">x</a>
<h3>Login</h3>
<form method="post" action="https://google.com">
<div className="row">
Username:
<input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
</div>

<div className="row">
Password:
<input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
</div>
<div className="row">
<div className="remember">
<div>
<input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
</div>
<a href="https://google.com">Forget password ?</a>
</div>
</div>
<div className="row">
<button type="submit">Login</button>
</div>
</form>
<div className="row">
<p>Or via social</p>
<div className="social-btn-2">
<a className="fb" href="https://google.com"><i className="ion-social-facebook"></i>Facebook</a>
<a className="tw" href="https://google.com"><i className="ion-social-twitter"></i>twitter</a>
</div>
</div>
</div>
</div>
<div className="login-wrapper"  id="signup-content">
<div className="login-content">
<a href="https://google.com" className="close">x</a>
<h3>sign up</h3>
<form method="post" action="https://google.com">
<div className="row">
Username:
<input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
</div>

<div className="row">
your email:
<input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
</div>
<div className="row">
Password:
<input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
</div>
<div className="row">
re-type Password:
<input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
</div>
<div className="row">
<button type="submit">sign up</button>
</div>
</form>
</div>
</div>









<header className="ht-header"><div className="container">
<nav className="navbar navbar-default navbar-custom">

<div className="navbar-header logo">
<a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
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

</ul></div></nav></div></header>




<div className="page-single movie_list">
<div className="container">
<div className="row ipad-width2">
<div className="col-md-8 col-sm-12 col-xs-12">


<br />
<br />


<Listapelicula titulo="RESIDENT EVIL"      descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://i.blogs.es/c82453/cartel-resident-evil-el-capitulo-final/1366_2000.jpg" />
<Listapelicula titulo="X-MEN"              descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://super-ficcion.com/wp-content/uploads/2022/02/Como-ver-en-orden-las-peliculas-de-los-X-Men-780x470.jpg" />
<Listapelicula titulo="DESTINO FINAL"      descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://www.themoviedb.org/t/p/w500/yrQjtYmEsnc1hlDlXQZ29EMSFbp.jpg" />
<Listapelicula titulo="RAPIDOS Y FURIOSOS" descripcion="pelicula basada en hechos reales, los nombres se cambiaron para proteger su identidad real" duracion="1:59:18" estrellas="9" clasificacion="+18" fechaestreno="2002-02-09" director="Rodriguez Franklin" protagonista="Franklin Rodriguez" caratula="https://static.cinepolis.com/resources/mx/movies/posters/414x603/34669-453300-20210622125843.jpg" />







</div>
</div>
</div>
</div>




<footer className="ht-footer">
<div className="container">
<div className="flex-parent-ft">
<div className="flex-child-ft item1">
<a href="index-2.html"><img className="logo" src="images/logo1.png" alt="" /></a>

<p>
<a href="index-2.html">
18 Avenida, 5-25 Zona 1 NombreDeColonia<br />
Guatemala, Guatemala
</a>
</p>

<p>
<a href="https://google.com">
Llamame:
(+502) 3975 7208
</a>
</p>

</div>


<div className="flex-child-ft item2">
<h4>Recursos</h4>
<ul>
<li><a href="https://google.com">Sobre nosotros</a></li> 
<li><a href="https://google.com">Contactanos</a></li>
<li><a href="https://google.com">Foros</a></li>
<li><a href="https://google.com">Blog</a></li>
<li><a href="https://google.com">Centro de ayuda</a></li>
</ul>
</div>



<div className="flex-child-ft item3">
<h4>Legal</h4>
<ul>
<li><a href="https://google.com">Terminos de uso</a></li> 
<li><a href="https://google.com">Politica de privacidad</a></li>	
<li><a href="https://google.com">Seguridad</a></li>
</ul>
</div>
</div>
</div>
</footer>

{/* root-peliculasite */}</div>
);
}
/*
export default Peliculasite;
*/

