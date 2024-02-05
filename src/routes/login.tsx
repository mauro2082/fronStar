import DefaultLayout from "../layout/defaultLayout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;

        if (accessToken) {
          console.log("Token de acceso:", accessToken);

          // Establecer el estado de autenticación como true
          setIsAuthenticated(true);

          setUsername("");
          setPassword("");
          alert("BIENVENIDO");

          // Redirigir al usuario a la página de Dashboard u otra página segura
          navigate("/Dashboard");
        } else {
          console.log("Token de acceso no presente en la respuesta");
        }
      } else {
        console.log("Usuario Inválido");
        alert("POR FAVOR VERIFIQUE SUS CREDENCIALES");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (useAuth().isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else {
    console.log("fallo");
  }
    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <div className="divlog">
                    <div>
                        <h1>INGRESO FAN S.W</h1>
                        <label>Usuario:</label>
                        <input type="text" id="username" name="username" required placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label >Contraseña:</label>
                        <input type="password" id="password" name="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">INGRESAR</button>
                </div>
            </form>
        </DefaultLayout>
    );
}