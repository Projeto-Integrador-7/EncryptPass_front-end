import {
  Button,
  Flex,
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
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Container } from "../components/Container";
import { ItemCofre } from "../components/ItemCofre";
import { parseCookies } from "nookies";
import { AuthContext } from "../contexts/AuthContext";
import { folderService } from "../services";
import { getAPIClient } from "../services/axios";
import { Loading } from "../components/Loading";

export default function MeuCofre() {
  const route = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [folderList, setFolderList] = useState([]);
  const { user, loading } = useContext(AuthContext);

  async function loadingData() {
    await folderService
      .findAll(user._id)
      .then((res) => {
        setFolderList(res.data);
      })
      .catch((err) => {
        const id = "toast-fail-load";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: err.response.data.error,
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
    if (!title && !description) {
    } else {
      folderService
        .create(
          {
            title,
            description,
          },
          user._id
        )
        .then((res) => {
          onClose();
          console.log(res.data.folder);
          loadingData();
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

  const deletarPasta = (folderId: String) => {
    console.log(user._id)
    console.log("AAAAAAA")
    console.log(folderId)
    folderService
      .deleteFolder(user._id, folderId)
      .then((res) => {
        const id = "toast-success-delete";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Pasta removida com sucesso!",
            status: "success",
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        const id = "toast-error-delete";
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Erro ao deletar pasta!",
            status: "error",
            isClosable: true,
          });
        }
      });
  };

  return (
    <>
      <Container
        title="Meu Cofre"
        labelButton="Adicionar"
        iconButton={RiAddFill}
        buttonFunction={onOpen}
      >
        {loading ? (
          <Loading />
        ) : (
          <Flex w="100%" h="100%" flexDir="column">
            {folderList.map((item, index) => (
              <ItemCofre
                key={`index-${index}`}
                title={item.title}
                description={item.description}
                buttonFunction={() => {
                  route.push(
                    `/${item.nome.toLowerCase().replace(" ", "-")}/${item.id}`
                  );
                }}
                removeFunction={() => {deletarPasta(item.id)}}
              />
            ))}
          </Flex>
        )}
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"gray.700"}>Nova Pasta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={"gray.700"}>Nome da pasta</FormLabel>
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
          </ModalBody>

          <ModalFooter>
            <Button bg="green.700" mr={3} onClick={handleFolder}>
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
