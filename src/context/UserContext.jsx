import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserContextProvider({children}) {
  const [jwt, setJWT] = useState(null)
  const [username, setUsername] = useState(null)

  return <UserContext.Provider value={{jwt, setJWT, username, setUsername}}>
    {children}
  </UserContext.Provider>
}

export default UserContext