import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {RiDashboardLine} from "react-icons/ri"

export function Sidebar() {
  return (
    <Box as="aside" w="63" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">teste</Text>
            <Stack spacing="4" mt="8" align="stretch">
                <Link display="flex" align="center">
                    <Icon as={RiDashboardLine}/>
                </Link>
            </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
