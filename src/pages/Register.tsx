import { FormControl, Input, Button } from "@chakra-ui/react";
import { AuthContainer } from "../components/AuthContainer";

import { useState } from "react";

export default function Register() {
  return (
    <AuthContainer>
      <FormControl
        width={"17.5rem"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="1rem"
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
        />
        <Input
          id="password"
          type={"password"}
          border="none"
          placeholder="Confirmar Senha"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
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
          onClick={()=>{}}
        >
          Cadastrar
        </Button>
      </FormControl>
    </AuthContainer>
  );
}
