import React, { children } from 'react';
import {Link} from "react-router-dom";

interface DefaultLayaoutProps{
    children: React.ReactNode;
}

export default function Layoutdashboard({children}:DefaultLayaoutProps){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/Starship">Naves</Link>
                        </li>
                        <li>
                            <Link to="/Planet">Planetas</Link>
                        </li>
                        <li>
                            <Link to="/Film">Peliculas</Link>
                        </li>
                        <li>
                            <Link to="/Person">Personajes</Link>
                        </li>
                        <li>
                            <Link to="/Species">Especies</Link>
                        </li>
                        <li>
                            <Link to="/Species">Vehiculos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}