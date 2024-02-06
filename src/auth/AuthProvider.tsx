import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userId: string | null;  // Agregado para almacenar el userId
  setUserId: Dispatch<SetStateAction<string | null>>;  // Agregado para establecer el userId
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);  // Estado para almacenar el userId

  const logout = () => {
    // Lógica para limpiar cualquier información relacionada con la sesión
    setIsAuthenticated(false);
    setUserId(null);
  };

  const contextValue: AuthContextProps = {
    isAuthenticated,
    setIsAuthenticated,
    userId,
    setUserId,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
