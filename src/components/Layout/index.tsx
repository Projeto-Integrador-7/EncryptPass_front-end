import {Flex} from "@chakra-ui/react";

export default function Layout({children}) {
  return (
      <Flex 
        w="100vw" 
        h="100vh" 
        align="center" 
        justify="center" 
      >
        {children}
      </Flex>
    
  );
}