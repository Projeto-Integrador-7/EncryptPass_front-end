import {
  Button,
  FormControl,
  FormLabel,
  Input,
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
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { ItemCofre } from "../components/ItemCofre";
import { folderService } from "../services";

export default function MeuCofre() {
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
                title: "Nova pasta adicionada!",
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
  return (
    <>
      <Container
        title="Meu Cofre"
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
          <ModalHeader>Nova Pasta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome da pasta</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nome da pasta"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="green.700" mr={3} onClick={handleFolder}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
