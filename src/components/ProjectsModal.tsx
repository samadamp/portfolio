import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import projects from "../projects.json";
import { Icons } from "./Icons";

export const ProjectsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent>
        <ModalHeader fontSize="4xl">Projects</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4}>Here are some projects I've built! 👇</Text>
          <Flex flexDirection="column" gap={3}>
            {projects.map((project) => (
              <Flex key={project.name} alignItems="center" gap={2}>
                <Icons.Github boxSize={6} />
                <Link
                  _hover={{ color: "teal.600", transform: "scale(1.05)" }}
                  transition="all 0.3s"
                  href={project.url}
                  isExternal
                  fontWeight="bold"
                  color="teal.500"
                >
                  {project.name}
                </Link>
              </Flex>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
