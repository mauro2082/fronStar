import { Children } from "react";
import {Link} from "react-router-dom";

interface DefaultLayaoutProps{
    children: React.ReactNode;
}

export default function DefaultLayaout({children}:DefaultLayaoutProps){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/SignUP">Registrarme</Link>
                        </li>
                        <li>
                            <Link to="/Dashboard">Panel</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}