import React, { createContext, useContext, useState } from "react";

const NameContext = createContext({});

export const useNameContext = () => useContext(NameContext);

function NameProvider({ children }) {
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  function saveName(name) {
    console.log(name);
    console.log(error);

    if (name !== null) {
      setName(name);
      setError(null);
    } else {
      setError("Please, insert valid name");
    }
  }

  return (
    <NameContext.Provider value={{ name, setName, setError, error }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
