import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){
  const searchInputRef = useRef<HTMLInputElement>(null)
    return(
        <Flex
        as="label"
        flex="1"
        py="2"
        px="4"
        ml="6"
        maxW={250}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.700"
        borderRadius="full"
      >
        <Icon as={RiSearchLine} fontSize="20" color="green.700"/>
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          _placeholder={{ color: "gray.400" }}
          ref={searchInputRef}
        />
      </Flex>
    );
}