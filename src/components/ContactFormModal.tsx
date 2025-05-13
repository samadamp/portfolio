import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Input, Textarea, Button, HStack, Link } from "@chakra-ui/react";
import { useSendEmail } from "../hooks/useSendEmail";
import { Icons } from "./Icons";

export const ContactFormModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { form, sendEmail, isSending } = useSendEmail(onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent>
        <ModalHeader fontSize="4xl">Contact Me</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            <Flex flexDirection="column" gap={4}>
              <Input placeholder="Your Name" name="name" required />
              <Input placeholder="Your Email" name="email" type="email" required />
              <Textarea placeholder="Your Message" name="message" required />
            </Flex>
            <ModalFooter flexDirection="column" gap={4}>
              <Button type="submit" colorScheme="blue" width="full" isLoading={isSending} loadingText="Sending...">
                Send
              </Button>
              <HStack spacing={6} justify="center">
                <Link href="https://github.com/samadamp" isExternal>
                  <Icons.Github boxSize={8} _hover={{ transform: "scale(1.2)" }} transition="all 0.4s" />
                </Link>
                <Link href="https://linkedin.com/in/sam-pankhurst-769243291/" isExternal>
                  <Icons.LinkedIn boxSize={8} _hover={{ transform: "scale(1.2)" }} transition="all 0.4s" />
                </Link>
              </HStack>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
