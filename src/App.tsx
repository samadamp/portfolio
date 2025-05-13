import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { AnimationBox } from "./components/Animation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
    >
      <AnimationBox
        mt={72}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        py={4}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 2 }}
      >
        <Box fontSize="5xl" fontWeight="bold" letterSpacing="widest">
          SAM PANKHURST
        </Box>
        <Box
          fontSize="lg"
          fontWeight="medium"
          letterSpacing="wide"
          maxW="600px"
          px={4}
        >
          Hi, I'm Sam Pankhurst, a Frontend Developer based out of Sweden.
          Learning as I go and always trying to improve.
        </Box>
        <Navbar />
      </AnimationBox>
      <AnimationBox
       initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 2 }}
      >
        <Footer />
      </AnimationBox>
    </Flex>
  );
}

export default App;
