import { Avatar, Stack, Text, HStack, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../Loading";

export type BoxPerfilProps = {
  name?: string;
  src?: string;
  size?: string;
};

export function BoxPerfil({ name, src, size }: BoxPerfilProps) {
  const { user, loading } = useContext(AuthContext);
  return (
    <HStack spacing="3">
      {loading ? (
          <Loading />
      ) : (
        <>
          <Avatar
            showBorder
            borderColor="green.700"
            size={size}
            name={name}
            src={src}
          />
          <Stack spacing="0">
            <Text>{name}</Text>
            <Text fontSize="xs">Meu perfil</Text>
          </Stack>
        </>
      )}
    </HStack>
  );
}
