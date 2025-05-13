import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";


export const ProjectsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
   <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent>
          <ModalHeader fontSize="4xl">Projects</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Here are some projects I've built! (You can add links to GitHub
              projects here later.)
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
  );
};
