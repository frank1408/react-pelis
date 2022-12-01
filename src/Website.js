

import React from 'react';
import './Website.css';
import Arriba from './Arriba';
import Abajo from './Abajo';

export default function Website(props) {

return (
<div className="container-fluid">{/* Website */}

<Arriba />

<div id="ccontenido">
{props.children}
</div>

<Abajo />

{/* Website */}</div>
);
}

