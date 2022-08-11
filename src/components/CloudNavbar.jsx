import {
  Box,
  Button,
  Circle,
  Stack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { BsFillCloudCheckFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai';
import useUser from '../hooks/useUser';
import UserInfoModal from './UserInfoModal';

// TODO: Dejar el boton de usuario circular

export default function CloudNavbar() {
  const { userLogged, logout, isLogged } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(isLogged);

  return (
    <div>
      <Box mt={4}>
        <HStack float="right" mr={4}>
          <Menu>
            <MenuButton as={Button} colorScheme="facebook">
              <AiOutlineUser />
            </MenuButton>
            <MenuList>
              <MenuItem as="button" onClick={onOpen}>
                Ver informacion del usuario
              </MenuItem>
              <MenuItem as={'button'} onClick={logout}>
                Cerrar sesion
              </MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme={'orange'}>
            <ImSun />
          </Button>
        </HStack>
        <Box ml={4}>
          <HStack spacing={4}>
            <Button
              colorScheme={'black'}
              leftIcon={<BsFillCloudCheckFill />}
              variant={'ghost'}
            >
              Nube
            </Button>
            <Button variant="link" colorScheme={'facebook'}>
              subir
            </Button>
            <Button variant={'link'} colorScheme="facebook">
              nueva carpeta
            </Button>
          </HStack>
        </Box>
        <UserInfoModal isOpenBtn={isOpen} onCloseBtn={onClose} />
      </Box>
    </div>
  );
}
