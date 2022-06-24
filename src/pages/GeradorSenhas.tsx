import { GetServerSideProps } from "next";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";
import {
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BotaoAdicionar } from "../components/Buttons";

export default function GeradorSenha() {
  const { user, loading } = useContext(AuthContext);
  const [pass, setPass] = useState("");
  const [send, setSand] = useState(false);
  const [especials, setEspecials] = useState(["", false]);
  const [numbers, setNumbers] = useState(["", false]);
  const [mai, setMai] = useState(["", false]);
  const [min, setMin] = useState(["", false]);
  function gerarSenha() {
    var i = 0;
    for (i = 1; i <= 8; i++) {
      const chars = String(numbers[0]) + min[0] + mai[0] + especials[0];
      const passwordLength = 16;
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }

      setPass(password);
    }
  }
  return (
    <Container
      showButton={false}
      showSearchBox={false}
      title="Gerador de Senhas"
      labelButton="Adicionar"
      iconButton={RiAddFill}
      buttonFunction={() => {}}
    >
      {loading ? (
        <Loading />
      ) : (
        <Flex w="100%" h="100%" flexDir="column" align="center">
          <CheckboxGroup
            colorScheme="green.700"
          >
            <Stack spacing={[1, 5]} direction={"column"}>
              <Checkbox onChange={e => setEspecials([e.target.checked ? "!@#$%^&*()+?><:{}[]" : "", e.target.checked])}>Incluir caracteres especiais</Checkbox>
              <Checkbox onChange={e => setNumbers([e.target.checked ? "0123456789" : "", e.target.checked])}>Incluir números</Checkbox>
              <Checkbox onChange={e => setMai([e.target.checked ? "ABCDEFGHIJLMNOPQRSTUVWXYZ" : "", e.target.checked])}>Incluir letras maiúsculas</Checkbox>
              <Checkbox onChange={e => setMin([e.target.checked ? "abcdefghijklmnopqrstuvwxyz" : "", e.target.checked])}>Incluir letras minusculas</Checkbox>
            </Stack>
          </CheckboxGroup>
          <Input
            id="pass"
            border="none"
            _placeholder={{ opacity: 0.5, color: "gray.100" }}
            placeholder="Senha Forte"
            background="gray.700"
            borderRadius="3.125rem"
            marginBottom="0.625rem"
            fontSize="14"
            color="gray.50"
            value={pass}
          />
          {send ? (
            <Loading />
          ) : (
            <BotaoAdicionar
              labelButton="Gerar Senha"
              iconButton={undefined}
              bg="green.700"
              w="7rem"
              onClick={gerarSenha}
            />
          )}
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
