import { useToast } from '@chakra-ui/react';
import { useCallback, useContext } from 'react';
import UserContext from '../context/UserContext';
import { loginService } from '../services/LoginService';

export default function useUser() {
  const { jwt, setJWT, username, setUsername } = useContext(UserContext);
  const toast = useToast();

  const login = useCallback(async (user) => {
    const loginResponse = await loginService(user);
    const usernameRes = loginResponse.data.res

    if (loginResponse.status === 200) {
      setJWT("token")
      setUsername(usernameRes)
    } else if (loginResponse.status === 400) {
      toast({
        title: 'Usuario o clave erroneos',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  }, [setJWT]);

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    login,
    isLogged: Boolean(jwt),
    userLogged: username,
    logout
  };
}
