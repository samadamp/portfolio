import { HStack, Button, useDisclosure } from "@chakra-ui/react";
import { Icons } from "./Icons";

import { ContactFormModal } from "./ContactFormModal";
import { AboutModal } from "./AboutModal";
import { ProjectsModal } from "./ProjectsModal";

export const Navbar = () => {
  const {
    isOpen: isAboutOpen,
    onOpen: onAboutOpen,
    onClose: onAboutClose,
  } = useDisclosure();
  const {
    isOpen: isProjectsOpen,
    onOpen: onProjectsOpen,
    onClose: onProjectsClose,
  } = useDisclosure();
  const {
    isOpen: isContactOpen,
    onOpen: onContactOpen,
    onClose: onContactClose,
  } = useDisclosure();

  return (
    <>
      <HStack spacing={6}>
        <Button
          onClick={onAboutOpen}
          fontSize="3xl"
          variant="ghost"
          leftIcon={<Icons.User />}
          _hover={{ color: "blue.300", transform: "scale(1.05)" }}
          transition="all 0.3s"
        >
          About
        </Button>

        <Button
          onClick={onProjectsOpen}
          fontSize="3xl"
          variant="ghost"
          leftIcon={<Icons.Folder />}
          _hover={{ color: "blue.300", transform: "scale(1.05)" }}
          transition="all 0.3s"
        >
          Projects
        </Button>
        
        <Button
          onClick={onContactOpen}
          fontSize="3xl"
          variant="ghost"
          leftIcon={<Icons.Mail />}
          _hover={{ color: "blue.300", transform: "scale(1.05)" }}
          transition="all 0.3s"
        >
          Contact
        </Button>
      </HStack>
      <AboutModal isOpen={isAboutOpen} onClose={onAboutClose} />
      <ProjectsModal isOpen={isProjectsOpen} onClose={onProjectsClose} />
      <ContactFormModal isOpen={isContactOpen} onClose={onContactClose} />
    </>
  );
};
