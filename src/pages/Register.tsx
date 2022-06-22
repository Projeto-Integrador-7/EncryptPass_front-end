import { FormControl, Input, Button, useToast } from "@chakra-ui/react";
import { AuthContainer } from "../components/AuthContainer";

import { useState, useEffect } from "react";
import { userService } from "../services";
import {useHistory} from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordReminder, setPasswordReminder] = useState(false);
  const [passwordReminderTip, setPasswordReminderTip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const history = useHistory();
  const toast = useToast();

  const userRegister = async () => {
    if (password == passwordConfirmation) {
      if (name && email && password && password && passwordConfirmation) {
        await userService.create({
            name,
            email,
            password,
            passwordReminder:
              passwordReminderTip == "" || passwordReminderTip == null
                ? false
                : true,
            passwordReminderTip,
            phoneNumber,
          })
          .then((res) => {
            history.push('/Login')
            const id = "toast-success-register";
            if (!toast.isActive(id)) {
              toast({
                id,
                title: "Usuário cadastrado com sucesso!",
                status: "success",
                isClosable: true,
              });
            }
          })
          .catch((err) => {
            const id = "toast-error-register";
            if (!toast.isActive(id)) {
              toast({
                id,
                title: err.response.data.error,
                status: "error",
                isClosable: true,
              });
            }
          });
      } else {
        const id = "toast-form-invalid";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Preencha todos os campos obrigatórios",
            status: "error",
            isClosable: true,
          });
        }
      }
    }else{
      const id = "toast-passwords-difs";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "As senhas não coincidem",
            status: "error",
            isClosable: true,
          });
        }
    }
  };

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
          id="nome"
          type={"text"}
          placeholder="Nome completo*"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          border="none"
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          id="email"
          type={"email"}
          placeholder="Email*"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          border="none"
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          id="password"
          type={"password"}
          border="none"
          placeholder="Senha Master*"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          id="passwordConfirmation"
          type={"password"}
          border="none"
          placeholder="Confirmar Senha*"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={passwordConfirmation}
        />
        <Input
          id="passwordReminder"
          type="text"
          border="none"
          placeholder="Dica de senha"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setPasswordReminderTip(e.target.value)}
          value={passwordReminderTip}
        />
        <Input
          id="phoneNumber"
          type="tel"
          border="none"
          placeholder="Telefone"
          _placeholder={{ opacity: 1, color: "gray.50" }}
          background="gray.700"
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
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
          onClick={userRegister}
        >
          Cadastrar
        </Button>
      </FormControl>
    </AuthContainer>
  );
}
