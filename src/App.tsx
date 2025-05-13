import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { AnimationBox } from "./components/Animation";

function App() {
  return (
    <>
      <AnimationBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
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
          Learning as i go and always trying to improve.
        </Box>
        <Navbar />
      </AnimationBox>
    </>
  );
}

export default App;
