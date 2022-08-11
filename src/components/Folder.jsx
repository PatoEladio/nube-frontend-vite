import { Box, HStack, Text } from '@chakra-ui/react';
import { AiFillFolder } from 'react-icons/ai';

export default function Folder() {
  return (
    <div>
      <Box borderWidth={'1px'} borderRadius="md" shadow="md" p={4}>
        <HStack spacing={4}>
          <AiFillFolder />
          <Text fontSize={'md'}>Carpeta</Text>
        </HStack>
      </Box>
    </div>
  );
}
