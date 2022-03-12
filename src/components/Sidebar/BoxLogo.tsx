import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { LogoVerde, Ativo1 } from "./../../assets";

export function BoxLogo() {
  return (
    <Box>
      <Image src={Ativo1} alt="" />
    </Box>
  );
}
