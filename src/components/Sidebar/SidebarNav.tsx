import { Box, Stack } from "@chakra-ui/react";
import { RiShieldLine, RiKey2Fill, RiSettings5Line } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import {BoxLogo} from "./BoxLogo"
import { BoxPerfil } from "./BoxPerfil";

export function SidebarNav() {
  return (
    <Stack spacing="5" align="flex-start">
      <BoxLogo />
      <BoxPerfil size="sm" name="Felipe Gomes" />
      <NavSection>
        <NavLink icon={RiShieldLine} href="/dashboard">Meu Cofre</NavLink>
        <NavLink icon={RiKey2Fill} href="/users">Gerador de Senha</NavLink>
        <NavLink icon={RiSettings5Line} href="/forms">Configurações</NavLink>
      </NavSection>
    </Stack>
  );
}
