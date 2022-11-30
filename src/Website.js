

import React from 'react';
import './Website.css';
import Arriba from './Arriba';
import Abajo from './Abajo';
import Pagpeliculas from './Pagpeliculas';

export default function Website(props) {

return (
<div className="container-fluid bg-dark text-light">{/* Website */}

<div className="row">
	<Arriba />
{/* row */}</div>

<div className="row">
{props.children}
{/* row */}</div>


<div className="row">
	<Abajo />
{/* row */}</div>

{/* Website */}</div>
);
}

