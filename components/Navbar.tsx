import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/Bi";

type navbarProps = {};

const Navbar: React.FC<navbarProps> = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={4}
      width={"100%"}
      h={"10vh"}
      bg={"white"}
      // color="white"
    >
      <Text fontWeight="bold" color={"black"}>
        Join
      </Text>

      <Flex align="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          overflow="hidden"
          width={10}
          height={10}
          marginRight={4}
        >
          <Box
            background={"black"}
            borderRadius={"full"}
            width={"40px"}
            h={"40px"}
          ></Box>
        </Box>
        <Menu>
          <MenuButton
            // display={"flex"}
            fontSize="md"
            fontWeight="bold"
            cursor="pointer"
            _hover={{ color: "gray.300" }}
            color={"black"}
          >
            <Flex alignItems={"center"}>
              Nousheen Fatima
              <BiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList backgroundColor="gray.400">
            <MenuItem color="black">Profile</MenuItem>
            <MenuItem color="black">Setting</MenuItem>
            <MenuItem color="black">Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
export default Navbar;
