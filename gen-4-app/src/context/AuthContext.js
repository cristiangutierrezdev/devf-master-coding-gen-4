import React, { createContext, useState } from 'react';

// Creamos el contexto
export const AuthContext = createContext();

// Creamos el Componente Proveedor
export const AuthProvider = (props) => {
  const [token, setToken] = useState('')

  // creamos un objeto con la data a compartir
  const data = {
    token, 
    setToken
  }

  // Retornamos el Contexto creado anteriormente pero utilizando su atributo Provider
  // Le pasamos al Componente en su atributo value la data que queremos compartir (en forma de objeto)
  return <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>;
};
