import { Box, Flex, Text, Link, HStack } from "@chakra-ui/react";
import { Icons } from "./Icons";

export const Footer = () => {
  return (
    <Box py={4} width="100%">
      <Flex justify="center" align="center" direction="column" gap={2}>
        <HStack spacing={4}>
          <Link href="https://github.com/samadamp" isExternal>
            <Icons.Github boxSize={7} _hover={{ color: "teal.600", transform: "scale(1.45)" }}
                  transition="all 0.4s"/>
          </Link>
          <Link href="https://linkedin.com/in/sam-pankhurst-769243291/" isExternal>
            <Icons.LinkedIn boxSize={7} _hover={{ color: "teal.600", transform: "scale(1.45)" }}
                  transition="all 0.4s"/>
          </Link>
        </HStack>

        <Text fontSize="sm" color="gray.500">
          © 2025 Sam Pankhurst. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
