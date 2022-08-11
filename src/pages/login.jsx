import {
  Box,
  FormControl,
  Input,
  Stack,
  Center,
  Text,
  Button,
  Link,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import useUser from '../hooks/useUser';
import { loginService } from '../services/LoginService';

export default function Login() {
  const [user, setUser] = useState({ username: '', password: '' });
  const { login, isLogged } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

  useEffect(() => {
    isLogged ? navigate('/cloud', { replace: true }) : null;
  }, [isLogged]);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div>
      <Box ml={4} mt={4}>
        <Button
          colorScheme={'black'}
          leftIcon={<BsFillCloudCheckFill />}
          ml={4}
          variant={'ghost'}
        >
          Nube
        </Button>
      </Box>
      <Center h="600px">
        <Box border={'1px'} w="400px" shadow={'lg'}>
          <Box m={8}>
            <Box>
              <Stack spacing="4">
                <Text fontSize={'2xl'} fontWeight="semibold">
                  Iniciar sesion
                </Text>
                <FormControl
                  autoComplete="off"
                  as="form"
                  isRequired
                  onSubmit={handleLogin}
                >
                  <Input
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    type="text"
                    variant={'flushed'}
                    placeholder={'Usuario*'}
                    mb={2}
                  />
                  <InputGroup size="md">
                    <Input
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      type={showPassword ? 'text' : 'password'}
                      variant={'flushed'}
                      placeholder={'Clave*'}
                    />
                    <InputRightElement width={"4.5rem"}>
                      <Button size="sm" onClick={handleShow}>{showPassword ? 'Ocultar' : 'Mostrar'}</Button>
                    </InputRightElement>
                  </InputGroup>

                  <Text mt={4} fontSize={'sm'}>
                    <Link href="/remember">Olvidaste tu clave?</Link>
                  </Text>
                  <Text mt={2} fontSize={'sm'}>
                    <Link href="/register">Crear cuenta</Link>
                  </Text>
                  <Button type="submit" float="right" colorScheme={'facebook'}>
                    Ingresar
                  </Button>
                </FormControl>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Center>
    </div>
  );
}
