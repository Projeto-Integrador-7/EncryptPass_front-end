import { Box, FormControl, Input, Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import { AuthContainer } from "../components/AuthContainer";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth() {
    if (!email && !password) {
      const id = "toast-warning-login";
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Preencha todos os campos",
          status: "warning",
          isClosable: true,
        });
      }
    } else {
      await signIn({
          email,
          password,
        })
        // .then((res) => {
        //   const id = "toast-success-login";
        //   if (!toast.isActive(id)) {
        //     toast({
        //       id,
        //       title: "Seja bem vindo!",
        //       status: "success",
        //       isClosable: true,
        //     });
        //   }
        // })
        // .catch((err) => {
        //   const id = "toast-error-login";
        //   if (!toast.isActive(id)) {
        //     toast({
        //       id,
        //       title: err.response.data.error,
        //       status: "error",
        //       isClosable: true,
        //     });
        //   }
        // });
    }
  }
  return (
    <AuthContainer>
      <FormControl
        width={"17.5rem"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="3rem"
      >
        <Input
          id="email"
          type={"email"}
          placeholder="Email"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          border="none"
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          type={"password"}
          border="none"
          placeholder="Senha Master"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          width="6.375rem"
          height="2.063rem"
          background="green.700"
          color="gray.50"
          fontWeight="normal"
          marginTop="1rem"
          borderRadius="3.125rem"
          type="submit"
          onClick={handleAuth}
        >
          Entrar
        </Button>
      </FormControl>
    </AuthContainer>
  );
}
