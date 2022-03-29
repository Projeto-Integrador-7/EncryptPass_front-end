import { Box } from "@chakra-ui/react";

import Image from "next/image";

import Layout from "../Layout";
import { Logo } from "../../assets";
import { ReactNode } from "react";

export type AuthContainerProps = {
    children: ReactNode
}

export function AuthContainer({children}:AuthContainerProps) {
  return (
    <Layout>
      <Box 
      width="25rem" 
      height="25rem" 
      background="gray.600" 
      borderRadius="1.875rem"
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDirection={"column"}
    >

      <Box marginTop="2rem">
        <Image 
          src={Logo}
          alt='Logo'
          width="200"
          height="100"
        />
      </Box>
        {children}
      </Box>
    </Layout>
    
   
  );
}
