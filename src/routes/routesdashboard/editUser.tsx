import { useContext, createContext, useState, useEffect } from "react";

interface User {
  id: string;
  cedula: string;
  email: string;
  username: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  editUser: (updatedUser: Partial<User>) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  editUser: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simula la obtención del usuario autenticado desde tu backend
    const fetchUserData = async () => {
      try {
        // Realiza una llamada a tu API para obtener la información del usuario
        const response = await fetch('https://api.example.com/user', {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Reemplaza con tu token real
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const editUser = (updatedUser: Partial<User>) => {
    // Verifica si el usuario está autenticado y si el ID coincide
    if (isAuthenticated && user && user.id === updatedUser.id) {
      // Simula la actualización de la información del usuario en tu backend
      // Puedes hacer una llamada a tu API para actualizar la información
      // Aquí deberías manejar la lógica real de actualización
      const updatedUserData = { ...user, ...updatedUser };
      console.log('Updated user data:', updatedUserData);
      setUser(updatedUserData);
    } else {
      console.error('Unauthorized or invalid user ID for edit');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, editUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
