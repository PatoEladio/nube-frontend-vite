import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  propNames,
  useDisclosure,
} from '@chakra-ui/react';

export default function UserInfoModal(props) {
  
  return (
    <Modal isOpen={props.isOpenBtn} onClose={props.onCloseBtn}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Informacion del usuario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Usuario: Bastian 
          Fecha de Nacimiento: 21/03/2003 
          Correo: bastiancarrion7@gmail.com
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="facebook">
            Cambiar clave
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
