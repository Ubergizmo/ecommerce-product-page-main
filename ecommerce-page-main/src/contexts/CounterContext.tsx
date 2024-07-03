import React, { createContext, useContext, useState, ReactNode } from "react";

// Création du contexte avec un typage approprié
type CounterContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

// Fournir un contexte avec une valeur par défaut
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Hook pour utiliser le contexte
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

// Fournisseur du contexte
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<number>(0); // Initialiser avec 0

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
