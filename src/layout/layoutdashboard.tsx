import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function Layoutdashboard({ children }: DefaultLayoutProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // Puedes redirigir a una página de inicio o hacer cualquier otra acción después de desloguear.
    navigate("/"); // Redirigir a la página de inicio, ajusta según tus necesidades
  };

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
              <Link to="/Vehicle">Vehiculos</Link>
            </li>
            <li>
              <Link to="/EditUser">Editar</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="but1">SALIR</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
