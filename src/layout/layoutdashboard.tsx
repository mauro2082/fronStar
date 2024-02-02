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
                            <Link to="/Naves">Naves</Link>
                        </li>
                        <li>
                            <Link to="/Planet">Planet</Link>
                        </li>
                        <li>
                            <Link to="/Peliculas">Peliculas</Link>
                        </li>
                        <li>
                            <Link to="/Personajes">Personajes</Link>
                        </li>
                        <li>
                            <Link to="/Razas">Razas</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}