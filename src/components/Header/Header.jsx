
import React from 'react';
import "./Header.css";

import Boton from '../../components/Boton/Boton';

const Header = () => {
    return (
        <div className="header">
            <Boton lugar="/" destino="Home"/>
            <Boton lugar="/register" destino="Registro"/>
        </div>
    )
}

export default Header;