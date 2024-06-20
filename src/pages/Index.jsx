import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#fff1e5">
      {/* Header */}
      <Box as="header" bg="#fff1e5" color="black" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">Financial Times</Heading>
          <Flex as="nav" gap={4}>
            <Link href="#" color="black">Home</Link>
            <Link href="#" color="black">World</Link>
            <Link href="#" color="black">Business</Link>
            <Link href="#" color="black">Tech</Link>
            <Link href="#" color="black">Markets</Link>
            <Link href="#" color="black">Opinion</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          {/* Top Stories Section */}
          <Box w="full">
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text>Top Story 1</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>
              <Text>Top Story 2</Text>
            </Box>
          </Box>

          {/* Other News Categories */}
          <Box w="full">
            <Heading as="h2" size="md" mb={4}>Other News</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Text>News Category 1</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md" mt={4}>
              <Text>News Category 2</Text>
            </Box>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="black" py={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex as="nav" gap={4}>
            <Link href="#" color="black">Privacy Policy</Link>
            <Link href="#" color="black">Terms of Service</Link>
            <Link href="#" color="black">Contact Us</Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;