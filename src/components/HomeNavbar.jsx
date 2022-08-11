import { Box, Stack, Button } from '@chakra-ui/react';
import { BsFillCloudCheckFill, BsFillSunFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';

function HomeNavbar() {
  return (
    <Box mt="4">
      <Button float={'right'} mr="4" colorScheme={'orange'}>
        <ImSun />
      </Button>
      <Stack direction={'row'} spacing={4}>
        <Button
          colorScheme={'black'}
          leftIcon={<BsFillCloudCheckFill />}
          ml={4}
          variant={'ghost'}
        >
          Nube
        </Button>
        <Button variant={'link'} colorScheme={'facebook'} fontWeight="normal">
          precios
        </Button>
        <Button variant={'link'} colorScheme={'facebook'} fontWeight="normal">
          sobre nosotros
        </Button>
      </Stack>
    </Box>
  );
}

export default HomeNavbar;
