import { createContext, useState } from 'react';

const CloudContext = createContext();

export function CloudContextProvider({ children }) {
  const [route, setRoute] = useState('');

  return (
    <CloudContext.Provider value={{ route, setRoute }}>
      {children}
    </CloudContext.Provider>
  );
}

export default CloudContext