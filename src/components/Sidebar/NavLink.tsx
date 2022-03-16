import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" justify="center" {...rest} _hover={{bg:"green.700"}} borderRadius="full" h="30px" px="3">
        <Icon as={icon} fontSize="17" alignSelf="center" />
        <Text ml="4" fontSize="12" fontWeight="medium" alignSelf="center">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
