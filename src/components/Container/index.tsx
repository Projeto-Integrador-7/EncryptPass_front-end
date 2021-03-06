import { Flex, HStack, Icon, Link } from "@chakra-ui/react";
import { ElementType, ReactNode, useContext } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { Sidebar } from "../Sidebar";
import { Title } from "../Text";
import { BotaoAdicionar } from "../Buttons";
import { SearchBox } from "../SearchBox";
import { AuthContext } from "../../contexts/AuthContext";

export type ContainerProps = {
  children?: ReactNode;
  title?: string | string[];
  labelButton?: string;
  iconButton?: ElementType;
  showButton?: boolean;
  buttonFunction?: Function;
  showSearchBox?: boolean;
};

export function Container({
  children,
  title,
  labelButton,
  iconButton,
  buttonFunction,
  showButton = true,
  showSearchBox = true,
}: ContainerProps) {
  const { user } = useContext(AuthContext);
  return (
    <Flex h="100vh" py="5rem" px="12rem">
      <Sidebar userName={String(user?.name)} />
      <Flex
        w="100%"
        h="100%"
        bg="gray.600"
        borderRadius="20"
        p="1.5rem"
        flexDir="column"
      >
        <Flex w="100%" align="center" justify="space-between" mb="2rem">
          <HStack>
            <Link
              onClick={() => window.history.back()}
              cursor="pointer"
              display="flex"
            >
              <Icon as={RiArrowLeftLine} fontSize="20" alignSelf="center" />
            </Link>
            <Title title={title} />
          </HStack>
          {showButton && (
            <BotaoAdicionar
              labelButton={labelButton}
              iconButton={iconButton}
              onClick={buttonFunction}
              bg="green.700"
            />
          )}
        </Flex>
        {showSearchBox && (
          <Flex w="100%" align="center" justify="flex-end" my="2">
            <SearchBox />
          </Flex>
        )}
        <Flex w="100%" h="100%" flexDir="column" >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
