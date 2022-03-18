import { Flex } from "@chakra-ui/react";
import { BotaoAdicionar } from "../Buttons";
import { Title } from "../Text";

export type ItemCofreProps = {
  title?: string;
  buttonFunction?: Function;
};

export function ItemCofre({ title, buttonFunction }) {
  return (
    <Flex
      bg="gray.700"
      align="center"
      justify="space-between"
      h="16"
      px="2rem"
      mb="1rem"
      borderRadius="full"
    >
      <Title title={title} />
      <BotaoAdicionar
        labelButton="Acessar"
        onClick={buttonFunction}
        iconButton={undefined}
      />
    </Flex>
  );
}
