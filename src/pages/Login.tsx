import { Box, FormControl, Input, Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Image from "next/image";

import { useState } from "react";
import Layout from "../components/Layout";
import { Logo } from "../assets";

export default function Login() {

  const router = useRouter();
  const toast = useToast();

  const fakeUser = {
    email: 'teste@teste.com',
    password: 'teste'
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleAuth() {
    if(email === fakeUser.email && password === fakeUser.password) {
      return router.push('/cofre')
    }
    
    return (
      toast({
        title: 'Erro ao acessar.',
        description: "Revise o usuário e senha.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    )

  }
  return (
    <Layout>
      <Box 
      width="25rem" 
      height="25rem" 
      background="gray.600" 
      borderRadius="1.875rem"
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDirection={"column"}
    >

      <Box marginTop="2rem">
        <Image 
          src={Logo}
          alt='Logo'
          width="200"
          height="100"
        />
      </Box>

      <FormControl
        width={"17.5rem"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="3rem"
      >
        <Input 
          id='email' 
          type={"email"} 
          placeholder="Email"
          _placeholder={{ opacity: 1, color: 'gray.50' }}
          border="none"
          background="gray.700" 
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          id='password' 
          type={"password"}
          border="none"
          placeholder="Senha Master"
          _placeholder={{ opacity: 1, color: 'gray.50' }}
          background="gray.700" 
          borderRadius="3.125rem"
          marginBottom="0.625rem"
          fontSize="14"
          color="gray.50"
          value={password}
          onChange={e => setPassword(e.target.value)}  
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
      </Box>
    </Layout>
    
   
  );
}
