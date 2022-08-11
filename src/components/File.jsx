import {
  Box,
  Text,
  HStack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import {
  AiFillFile,
  AiOutlineCloudDownload,
  AiFillDelete,
} from 'react-icons/ai';

import { GiHamburgerMenu } from 'react-icons/gi';

export default function File() {
  return (
    <div>
      <Box borderWidth={'1px'} borderRadius="md" shadow="md" p={4}>
        <HStack spacing={4}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<GiHamburgerMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AiOutlineCloudDownload />}>Descargar</MenuItem>
              <MenuItem icon={<AiFillDelete />}>Eliminar</MenuItem>
            </MenuList>
          </Menu>
          <AiFillFile />
          <Text fontSize={'md'}>Archivo</Text>
        </HStack>
      </Box>
    </div>
  );
}
