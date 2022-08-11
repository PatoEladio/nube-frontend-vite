import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ObjComponent({ title, description }) {
  return (
    <div>
      <Link to="/cloud/folder">
        <Box borderWidth={'1px'} shadow="md" p={4}>
          <Heading fontSize="lg">{title}</Heading>
          <Text mt={4}>{description}</Text>
        </Box>
      </Link>
    </div>
  );
}