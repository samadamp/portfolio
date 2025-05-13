import { Box, Flex, Text, Link, HStack } from "@chakra-ui/react";
import { Icons } from "./Icons";

export const Footer = () => {
  return (
    <Box as="footer" py={4} mt="auto" textAlign="center" width="100%">
      <Flex justify="center" align="center" direction="column" gap={2}>
        <HStack spacing={4}>
          <Link href="https://github.com/samadamp" isExternal>
            <Icons.Github boxSize={5} />
          </Link>
          <Link href="https://linkedin.com/in/sam-pankhurst-769243291/" isExternal>
            <Icons.LinkedIn boxSize={5} />
          </Link>
        </HStack>

        <Text fontSize="sm" color="gray.500">
          © 2025 Sam Pankhurst. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};
