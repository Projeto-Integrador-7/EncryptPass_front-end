import { Flex, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.700"
        size="md"
      />
    </Flex>
  );
}
