import React, { useState, useEffect } from 'react';
import Layoutdashboard from '../../layout/layoutdashboard';
import { useAuth } from '../../auth/AuthProvider';  // Asegúrate de importar correctamente

interface EditUserProps {
  // userId ya no es obligatorio aquí, ya que lo obtendrás del contexto
}

const EditUser: React.FC<EditUserProps> = () => {
  const { userId } = useAuth();  // Obtén el userId del contexto

  const [userData, setUserData] = useState({
    id: '',
    cedula: '',
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userId) {
      // Realizar una solicitud al servidor para obtener los detalles del usuario por ID
      fetch(`http://localhost:3000/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user details:', error));
    }
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Enviar los cambios al servidor para actualizar la información del usuario
    console.log("este es el tipo de dato user id:", typeof userId);
    const userIdAsString = userId ? userId.toString() : '';
    console.log("este es el tipo de dato:", typeof userIdAsString);
    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((updatedUserData) => {
        console.log('User details updated successfully:', updatedUserData);
        // Puedes realizar alguna acción después de la actualización, como redirigir a otra página
        setUserData({
          id: '',
          cedula: '',
          username: '',
          email: '',
          password: '',
        });
         
          
          alert("USUARIO EDITADO CON EXITO")
      })
      .catch((error) => console.error('Error updating user details:', error));
  };

  return (
    <Layoutdashboard>
      <div className="form">
        <h1>Editar Usuario</h1>
        <div>
          <label>Cedula:</label>
          <input type="text" name="cedula" value={userData.cedula} onChange={handleChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>
        <button onClick={handleSave}>GUARDAR CAMBIOS</button>
      </div>
    </Layoutdashboard>
  );
};

export default EditUser;
