import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayaout from "../layout/defaultLayout"
import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    if(auth.isAuthenticated) {
        return <Navigate to= "/Dashboard" />
    }

    return <DefaultLayaout>
        <form className="form">
            <div className="divlog">
                <div>
                    <h1>INGRESO FAN S.W</h1>
                    <label>Usuario:</label>
                    <input type="text" id="username" name="username" required placeholder="Usuario" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div>
                    <label >Contraseña:</label>
                    <input type="password" id="password" name="password" required placeholder="Password" value={password}onChange={(e)=> setPassword(e.target.value)}/>
                </div>

            
                <button type="submit">INGRESAR</button>
                
            </div>
        </form>
    </DefaultLayaout>



}