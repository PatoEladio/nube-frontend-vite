import { Stack, Center, Button, Divider } from '@chakra-ui/react';
import HomeNavbar from '../components/HomeNavbar';

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <Divider mt={4} />
      <Center h="100px">
        <Stack direction={'row'} spacing={4}>
          <Button colorScheme={'facebook'} variant="solid">
            Iniciar Sesion
          </Button>
          <Button colorScheme={'facebook'} variant="outline">
            Registrarse
          </Button>
        </Stack>
      </Center>
    </div>
  );
}
