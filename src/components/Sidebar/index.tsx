import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

type SidebarProps = {
  userName: string;
}

export function Sidebar({userName}: SidebarProps) {
// const {isOpen ,onClose} = useSidebarDrawer()

//   const isDrawerSidebar = useBreakpointValue({
//     base: true,
//     lg: false,
//   })

  // if(isDrawerSidebar){
  //   return(
  //   <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
  //     <DrawerOverlay>
  //       <DrawerContent bg="gray.600" p="4">
  //         <DrawerCloseButton mt="6" />
  //         <DrawerHeader>Navegação</DrawerHeader>

  //         <DrawerBody>
  //           <SidebarNav />
  //         </DrawerBody>
  //       </DrawerContent>
  //     </DrawerOverlay>
  //   </Drawer>
  //   )
  // }
  return (
    <Box as="aside" bg='gray.600' borderRadius="20"  w="64" mr="8" p="1.5rem">
      <SidebarNav userName={userName}/>
    </Box>
  );
}
