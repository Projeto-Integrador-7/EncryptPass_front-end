import {
  Box,
  Flex,
  Text,
  HStack,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BotaoAdicionar } from "../Buttons";
import { Title } from "../Text";

export type ItemCofreProps = {
  title?: string;
  buttonFunction?: Function;
  removeFunction?: Function;
  description?: string;
};

export function ItemCofre({
  title,
  buttonFunction,
  description,
  removeFunction,
}: ItemCofreProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Flex
        bg="gray.700"
        align="center"
        justify="space-between"
        h="16"
        px="2rem"
        mb="0.5rem"
        borderRadius="full"
      >
        <Box>
          <Title title={title} />
          <Text>{description}</Text>
        </Box>
        <HStack spacing={2}>
          <Button
            colorScheme="red"
            h="8"
            borderRadius="full"
            size="lg"
            fontWeight="normal"
            onClick={onOpen}
          >
            Remover
          </Button>
          <BotaoAdicionar
            labelButton="Acessar"
            onClick={buttonFunction}
            bg="green.700"
            iconButton={undefined}
          />
        </HStack>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Pasta
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja deletar a pasta?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <BotaoAdicionar
                labelButton="Remover"
                onClick={removeFunction}
                bg="red"
                iconButton={undefined}
                ml={3}
              />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
