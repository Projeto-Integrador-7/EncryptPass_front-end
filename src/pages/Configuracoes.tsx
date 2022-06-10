import { GetServerSideProps } from "next";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Flex, Input } from "@chakra-ui/react";
import { BotaoAdicionar } from "../components/Buttons";

export default function Configuracoes() {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Container showButton={false} showSearchBox={false} title="Configurações">
        Carregando...
      </Container>
    );
  }
  return (
    <Container showButton={false} showSearchBox={false} title="Configurações">
      <Flex px={5} flexDir="column" align="center">
        <Input
          id="name"
          border="none"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={String(user.name)}
        />
        <Input
          id="email"
          border="none"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={String(user.email)}
        />
        <Input
          id="phoneNumber"
          border="none"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={String(user.phoneNumber)}
        />
        <BotaoAdicionar labelButton="Salvar" iconButton={undefined} bg="green.700" w="7rem" />
      </Flex>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["encryptpass.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/Login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
