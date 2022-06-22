import { GetServerSideProps } from "next";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Flex, Input } from "@chakra-ui/react";
import { BotaoAdicionar } from "../components/Buttons";
import { Loading } from "../components/Loading";

export default function Configuracoes() {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  useEffect(()=>{
    const loadData = () => {
      setName(String(user.name))
      setEmail(String(user.email))
      setTelefone(String(user.phoneNumber))
    }
    if(!loading){
      loadData()
    }
  },[loading])

  return (
    <Container showButton={false} showSearchBox={false} title="Configurações">
      {loading ? (
        <Loading />
      ) : (
        <Flex px={5} flexDir="column" align="center">
          <Input
            id="name"
            border="none"
            _placeholder={{ opacity: 0.5, color: "gray.100" }}
            placeholder="Nome"
            background="gray.700"
            borderRadius="3.125rem"
            marginBottom="0.625rem"
            fontSize="14"
            color="gray.50"
            value={name}
          />
          <Input
            id="email"
            border="none"
            _placeholder={{ opacity: 0.5, color: "gray.100" }}
            placeholder="E-mail"
            background="gray.700"
            borderRadius="3.125rem"
            marginBottom="0.625rem"
            fontSize="14"
            color="gray.50"
            value={email}
          />
          <Input
            id="phoneNumber"
            border="none"
            _placeholder={{ opacity: 0.5, color: "gray.100" }}
            placeholder="Telefone"
            background="gray.700"
            borderRadius="3.125rem"
            marginBottom="0.625rem"
            fontSize="14"
            color="gray.50"
            value={telefone}
          />
          <BotaoAdicionar
            labelButton="Salvar"
            iconButton={undefined}
            bg="green.700"
            w="7rem"
          />
        </Flex>
      )}
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
