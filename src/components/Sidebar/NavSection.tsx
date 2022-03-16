import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps{
    title?: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps){
    return(
        <Box w="100%">
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {title}
          </Text>
          <Stack spacing="1" align="stretch">
            {children}
          </Stack>
        </Box>
    );
}