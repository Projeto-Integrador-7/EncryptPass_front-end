import { GetServerSideProps } from "next";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { parseCookies } from "nookies";

export default function GeradorSenha() {
  return (
    <Container
      title="Gerador de Senhas"
      labelButton="Adicionar"
      iconButton={RiAddFill}
      buttonFunction={() => {}}
    >
      Teste
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
