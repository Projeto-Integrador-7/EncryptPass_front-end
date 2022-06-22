import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { BotaoAdicionar } from "../components/Buttons";

export default function Home() {
  const { user, loading } = useContext(AuthContext);
  const [userLog, setUserLog] = useState("");
  const history = useRouter();

  useEffect(() => {
    const loadingUser = () => {
      setUserLog(String(user.name));
    };
    if (!loading) {
      loadingUser();
    }
  }, [loading]);

  const Navegar = () => {
    history.push("/MeuCofre");
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Text>Seja bem vindo {loading ? "..." : `${userLog}`}!</Text>
      {!loading && (
        <BotaoAdicionar
          iconButton={undefined}
          bg="green.700"
          labelButton="Navegar para página inicial "
          onClick={Navegar}
        />
      )}
      <Loading />
    </Flex>
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
