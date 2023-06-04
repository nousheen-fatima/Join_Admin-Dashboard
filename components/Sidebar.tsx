import {
  Box,
  Divider,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiHome, FiLogOut, FiSettings, FiUsers } from "react-icons/Fi";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box
      pos="sticky"
      left="0"
      top={0}
      w="20%"
      h="90vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      flexDir="column"
      justifyContent="space-between"
      bg="white"
      paddingTop={"20px"}
      paddingLeft={"16px"}
    >
      <VStack spacing="4" align="stretch">
        <Link
          display="flex"
          alignItems="center"
          _hover={{ background: "blue.300" }}
        >
          <Icon as={FiHome} boxSize="5" />
          <Text ml="2">Dashboard</Text>
        </Link>
        <Link
          display="flex"
          alignItems="center"
          _hover={{ background: "blue.300" }}
        >
          <Icon as={FiUsers} boxSize="5" />
          <Text ml="2">Profile</Text>
        </Link>
        <Link
          display="flex"
          alignItems="center"
          _hover={{ background: "blue.300" }}
        >
          <Icon as={FiSettings} boxSize="5" />
          <Text ml="2">Settings</Text>
        </Link>
      </VStack>

      <Divider my="4" borderColor="gray.600" />

      <Stack spacing="2" align="stretch">
        <Link
          display="flex"
          alignItems="center"
          _hover={{ background: "blue.300" }}
        >
          <Icon as={FiLogOut} boxSize="5" />
          <Text ml="2">Logout</Text>
        </Link>
      </Stack>
    </Box>
  );
};
export default Sidebar;
