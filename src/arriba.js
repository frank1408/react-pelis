
import './Arriba.css';
/*
import logo from './logo.svg';
*/

export default function Arriba() {
return (
<div className="Arriba">{/* root-Arriba */}

<div className="login-wrapper" id="login-content">
<div className="login-content">

	<a href="https://google.com" className="close">x</a>
	<h3>Login</h3>
	<form method="post" action="https://google.com">
	
	<div className="row">
	Username: <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
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









<header className="ht-header">
	<div className="container">
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
	</ul>
	</div>
	</nav>
	</div>
</header>

{/* root-Arriba */}</div>);
}
/* export default Arriba; */

