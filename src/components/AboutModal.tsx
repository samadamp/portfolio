import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import skills from "../skills.json";

export const AboutModal = ({
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
        <ModalHeader fontSize="4xl">A Little About Me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text letterSpacing={"wide"} fontSize="lg">
            I'm a soon to be Frotend Developer (finishing my studies this June
            of 2025). Atm I'm focused on improving my skills in React,
            TypeScript, and Chakra UI. When i started this journey 2 years ago i
            had no previous experience in coding, but i have always been
            interested in technology and how things work. I started with HTML
            and CSS, then moved on to JavaScript, and now 2 years in im getting
            pretty comfortable with React, Typescript and Chakra UI.
          </Text>
          <Heading py={8} size="md" mb={2}>
            CURRENT SKILLS
          </Heading>
          <Flex flexWrap="wrap" gap={3}>
            {skills.map((skill) => (
              <Box
                key={skill.name}
                bg="green.200"
                _hover={{ bg: "green.300", transform: "scale(1.05)" }}
                transition="all 0.2s"
                cursor="pointer"
                color="black"
                px={4}
                py={2}
                borderRadius="md"
                fontWeight="semibold"
                fontSize="sm"
                boxShadow="md"
              >
                {skill.name}
              </Box>
            ))}
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
