import { GetServerSideProps } from "next";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";
import { Text } from "@chakra-ui/react";

export default function GeradorSenha() {
  const { user, loading } = useContext(AuthContext);
  return (
    <Container
      title="Gerador de Senhas"
      labelButton="Adicionar"
      iconButton={RiAddFill}
      buttonFunction={() => {}}
    >
      {loading ? <Loading /> : <Text>Teste</Text>}
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
