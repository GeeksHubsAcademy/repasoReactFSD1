
import React from 'react';
import "./Header.css";

import Boton from '../../components/Boton/Boton';

const Header = () => {
    return (
        <div className="header">
            <Boton lugar="/" destino="Home"/>
            <Boton lugar="/register" destino="Registro"/>
            <Boton lugar="/login" destino="Login"/>
            <Boton lugar="/profile" destino="Profile"/>
        </div>
    )
}

export default Header;