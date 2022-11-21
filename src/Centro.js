
import './Centro.css';
/*
import logo from './logo.svg';
*/

export default function Centro(props) {
return (
<div className="Centro">{/* root-Centro */}


<div className="page-single movie_list">
<div className="container">
<div className="row ipad-width2">
<div className="col-md-8 col-sm-12 col-xs-12">
<br />
<br />
{props.children}
</div>
</div>
</div>
</div>

{/* root-Centro */}</div>);
}
/* export default Centro; */

