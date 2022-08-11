import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudNavbar from '../components/CloudNavbar';
import useUser from '../hooks/useUser';
import Folder from '../components/Folder';
import File from '../components/File';

import { AiOutlineTable } from 'react-icons/ai';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';

export default function Cloud() {
  const { isLogged } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged ? navigate('/login', { replace: true }) : null;
  }, [isLogged, navigate]);

  return (
    <div>
      <CloudNavbar />
      <Divider mt={4} />
      <Breadcrumb
        ml={4}
        mt={4}
        fontWeight={'medium'}
        fontSize="sm"
        separator=">"
      >
        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage href="#">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider mt={4} />
      <Text fontSize="sm" fontWeight={'medium'} ml={4} mt={4}>
        Carpetas
      </Text>
      {/* Folder's Grid*/}
      <Grid m={4} templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem w="100%">
          <Folder />
        </GridItem>
        <GridItem w="100%">
          <Folder />
        </GridItem>
      </Grid>
      <Flex>
        <Text fontSize="sm" fontWeight={'medium'} ml={4} mt={4}>
          Archivos
        </Text>
        <Spacer />
        <ButtonGroup isAttached variant={'outline'} size="md" mr={4}>
          <IconButton icon={<AiOutlineTable />} />
          <IconButton icon={<BsFillGrid3X2GapFill />} />
        </ButtonGroup>
      </Flex>

      <Grid m={4} templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem w="100%">
          <File />
        </GridItem>
        <GridItem w="100%">
          <File />
        </GridItem>
        <GridItem w="100%">
          <File />
        </GridItem>
      </Grid>
    </div>
  );
}
