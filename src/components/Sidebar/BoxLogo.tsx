import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Logo } from "./../../assets";

export function BoxLogo() {
  return (
    <Box>
      <Image src={Logo} alt="" />
    </Box>
  );
}
