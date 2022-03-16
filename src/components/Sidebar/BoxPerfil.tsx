import { Avatar, Stack, Text, HStack } from "@chakra-ui/react";

export type BoxPerfilProps = {
  name?: string;
  src?: string;
  size?: string;
};

export function BoxPerfil({ name, src, size }: BoxPerfilProps) {
  return (
    <HStack spacing="3">
      <Avatar showBorder borderColor="green.700" size={size} name={name} src={src} />
      <Stack spacing="0">
        <Text>{name}</Text>
        <Text fontSize="xs">Meu perfil</Text>
      </Stack>
    </HStack>
  );
}
