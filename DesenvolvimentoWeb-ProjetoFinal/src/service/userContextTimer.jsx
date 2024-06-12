// src/service/contadorContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criação do Contexto
const ContadorContext = createContext();

// Provedor do Contexto
export const ContadorProvider = ({ children }) => {
  const [tempoTotal, setTempoTotal] = useState(10 * 60);

  useEffect(() => {
    let timer;
    if (tempoTotal > 0) {
      timer = setTimeout(() => {
        setTempoTotal((prevTempoTotal) => prevTempoTotal - 1);
      }, 1000);
    } else {
      alert("O tempo acabou!");
    }

    return () => clearTimeout(timer);
  }, [tempoTotal]);

  return (
    <ContadorContext.Provider value={{ tempoTotal, setTempoTotal }}>
      {children}
    </ContadorContext.Provider>
  );
};

// Hook para usar o contexto
export const useContador = () => {
  return useContext(ContadorContext);
};