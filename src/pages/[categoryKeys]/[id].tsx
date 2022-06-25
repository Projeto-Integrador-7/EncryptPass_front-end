import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../../components/Container";
import { ItemCofre } from "../../components/ItemCofre";
import { Loading } from "../../components/Loading";
import { AuthContext } from "../../contexts/AuthContext";
import { folderService } from "../../services";

export default function Keys() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const { categoryKeys, id } = router.query;
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [loginKey, setLoginKey] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [login, setLogin] = useState("");
  const [credentials, setCredentials] = useState([]);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { query } = useRouter();

  async function loadingData() {
    await folderService
      .findAllCredential(user._id, query.id)
      .then((res) => {
        console.log(res.data.credentials);
        setCredentials(res.data.credentials);
      })
      .catch((err) => {
        const id = "toast-load-fail";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Erro ao carregar credenciais!",
            status: "error",
            isClosable: true,
          });
        }
      });
  }

  useEffect(() => {
    if (!loading) loadingData();
  }, [loading]);

  const handleFolder = () => {
    if (!title || !login || !password) {
      const id = "toast-preen";
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Existem campos inválidos no formulário!",
          status: "error",
          isClosable: true,
        });
      }
    } else {
      folderService
        .createCredential(user._id, {
          title,
          url,
          password,
          login,
          folderId: query.id,
        })
        .then((res) => {
          loadingData();
          onClose();
          const id = "toast-success-folder";
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Nova senha adicionada!",
              status: "success",
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          loadingData();
          onClose();
          const id = "toast-fail-folder";
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Falha ao cadastrar nova pasta",
              status: "error",
              isClosable: true,
            });
          }
        });
    }
  };

  async function updateCredentials(credentialsId){
    await folderService.updateCredential(user._id, credentialsId, {
      login: loginKey,
      password: pass,
      folderId: query.id,
    }).then(()=>{
      loadingData();
    }).catch((err) => {
      loadingData();
      const id = "toast-fail-cred";
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Falha ao editar credenciais",
          status: "error",
          isClosable: true,
        });
      }
    })
  }

  async function deleteCredentials(credentialsId){
    await folderService.deleteCredential(user._id, credentialsId).then((res)=>{
      loadingData();
      const id = "toast-fail-folder";
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Credencial deletada!",
          status: "success",
          isClosable: true,
        });
      }
    }).catch(err => {
      loadingData();
      const id = "toast-fail-folder";
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Falha ao remover credenciais",
              status: "error",
              isClosable: true,
            });
          }
    })
  }

  const handleRandomKey = () => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    const passwordLength = 16;
    let pass = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      pass += chars.substring(randomNumber, randomNumber + 1);
    }

    setPassword(pass);
  };
  return (
    <>
      <Container
        title={categoryKeys}
        labelButton="Adicionar"
        iconButton={RiAddFill}
        buttonFunction={onOpen}
        showSearchBox={false}
      >
        {loading ? (
          <Loading />
        ) : (
          <Flex w="100%" h="100%" flexDir="column">
            <Accordion allowMultiple>
              {credentials.map((item, index) => (
                <AccordionItem key={`index-${index}`}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {item.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      border="none"
                      _placeholder={{ opacity: 1, color: "gray.50" }}
                      placeholder={item.login}
                      background="gray.700"
                      borderRadius="3.125rem"
                      marginBottom="0.625rem"
                      fontSize="14"
                      color="gray.50"
                      name="loginKey"
                      onChange={(e) => setLoginKey(e.target.value)}
                      value={item.login}
                    />
                    <Input
                      border="none"
                      _placeholder={{ opacity: 1, color: "gray.50" }}
                      placeholder={item.password}
                      background="gray.700"
                      borderRadius="3.125rem"
                      marginBottom="0.625rem"
                      fontSize="14"
                      color="gray.50"
                      name="pass"
                      onChange={(e) => setPass(e.target.value)}
                      value={item.password}
                    />
                    <ButtonGroup gap='4' display="flex" justifyContent="center">
                      <Button colorScheme='green' onClick={() => (updateCredentials(item._id))}>Salvar</Button>
                      <Button colorScheme='red' onClick={() => (deleteCredentials(item._id))}>Remover</Button>
                    </ButtonGroup>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        )}
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"gray.700"}>Nova Chave de Segurança</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} color="gray.500">
            <FormControl>
              <FormLabel color={"gray.700"}>Nome da chave</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Nome da pasta"
              />
            </FormControl>
            <FormControl>
              <FormLabel color={"gray.700"}>Login</FormLabel>
              <Input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                placeholder="Login"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={"gray.700"}>Senha</FormLabel>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  value={password}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    bg={"gray.700"}
                    color="gray.50"
                    h="1.75rem"
                    size="sm"
                    _hover={{
                      background: "gray.900",
                    }}
                    onClick={handleRandomKey}
                  >
                    Gerar
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={"gray.700"}>URL</FormLabel>
              <Input
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                placeholder="Url"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="green.700"
              _hover={{
                background: "green.800",
              }}
              mr={3}
              onClick={handleFolder}
            >
              Salvar
            </Button>
            <Button onClick={onClose} color={"white"}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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