

import React from 'react';
import './Website.css';
import Arriba from './Arriba';
import Abajo from './Abajo';

export default function Website(props) {

return (
<div className="container-fluid bg-black text-light">{/* Website */}

<Arriba />

{props.children}

<Abajo />

{/* Website */}</div>
);
}

