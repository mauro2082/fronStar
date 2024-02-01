import DefaultLayaout from "../layout/defaultLayout"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";

export default function SignUP() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cedula, setCedula] = useState("");

    const auth = useAuth();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    cedula,
                    username,
                    email,
                    password
                }),
            });

            if (response.ok) {
                console.log("Usuario creado exitosamente")
            } else {
                console.log("Error al crear el usuario")
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/Dashboard" />
    }

    return <DefaultLayaout>
        <form className="form" onSubmit={handleSubmit}>
            <div className="divlog">
                <div>
                    <h1>REGISTRO</h1>

                    <label>Registar usuario:</label>
                    <input type="text" id="username" name="username" required placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label >Registrar Identificacion:</label>
                    <input type="text" id="cedula" name="cedula" required placeholder="Identificacion" value={cedula} onChange={(e) => setCedula(e.target.value)} />
                </div>
                <div>
                    <label >Registrar Contraseña:</label>
                    <input type="password" id="password" name="password" required placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label >Registrar Correo:</label>
                    <input type="email" id="correo" name="correo" required placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">REGISTRAR</button>

            </div>
        </form>
    </DefaultLayaout>



}