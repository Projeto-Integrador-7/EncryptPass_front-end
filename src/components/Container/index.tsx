import { Flex } from "@chakra-ui/react";
import { ReactNode } from 'react'
import { Sidebar } from "../Sidebar";

export type ContainerProps = {
    children?: ReactNode
}

export function Container({children}: ContainerProps){
    return(<Flex h="100vh" p='5rem'><Sidebar /><Flex w='100%' h='100%'>{children}</Flex></Flex>);
}