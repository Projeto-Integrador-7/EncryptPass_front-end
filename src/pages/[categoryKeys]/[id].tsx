
import {
  Box,
  Button,
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
import { useRouter } from "next/router";
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../../components/Container";
import { ItemCofre } from "../../components/ItemCofre";
import { folderService } from "../../services";

export default function Keys() {
  const router =  useRouter()
  const { categoryKeys ,id } = router.query
  const [randomKey, setRandomKey] = useState("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const testeItem = [
    { nome: "Streamings" },
    { nome: "Redes Sociais" },
    { nome: "Faculdade" },
  ];
  const handleFolder = () => {
    if (!title && !description) {
    } else {
      folderService.create({
          title,
          description,
        })
        .then((res) => {
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

  const handleRandomKey = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    const passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    setRandomKey(password)
  }
  return (
    <>
      <Container
        title={categoryKeys}
        labelButton="Adicionar"
        iconButton={RiAddFill}
        buttonFunction={onOpen}
      >
        {testeItem.map((item, index) => (
          <ItemCofre
            key={`index-${index}`}
            title={item.nome}
            buttonFunction={() => {}}
          />
        ))}
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
                placeholder="Nome da pasta"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={"gray.700"}>Descrição</FormLabel>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={"gray.700"}>Usuário</FormLabel>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={"gray.700"}>Senha</FormLabel>
              <InputGroup>
                <Input
                  pr='4.5rem'
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrição"
                  value={randomKey}
                />
                <InputRightElement width='4.5rem'>
                <Button 
                  bg={"gray.700"} 
                  color="gray.50"
                  h='1.75rem' 
                  size='sm'
                  _hover={{
                    background: "gray.900"
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
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
              bg="green.700" 
              _hover={{
                background: "green.800"
              }}
              mr={3} 
              onClick={handleFolder}>
              Salvar
            </Button>
            <Button onClick={onClose} color={"white"}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
