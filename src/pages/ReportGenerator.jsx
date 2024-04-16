import React from "react";
import { Box, Button, Heading, VStack, Select, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const ReportGenerator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue" size="lg">
        Gerar Laudos
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gerador de Laudos Radiológicos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Heading size="lg">Escolha uma ferramenta:</Heading>
              <Button colorScheme="teal" size="md">
                Gerador de Impressões
              </Button>
              <Button colorScheme="purple" size="md">
                Gerador de Descrições Radiológicas
              </Button>
              <Button colorScheme="orange" size="md">
                Gere seus Laudos por Templates
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ReportGenerator;
