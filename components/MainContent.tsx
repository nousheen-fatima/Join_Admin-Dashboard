import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/Bs";

type MainContentProps = {};

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <Flex flexDir={"column"} h={"16"} w={"100%"} gap="12px">
      <Text fontSize="lg" fontWeight="bold" mb={2} padding={"24px 48px"}>
        3 applications submitted
      </Text>
      <Box
        width={"90%"}
        flex="1"
        border="1px solid black"
        boxShadow={"base"}
        borderRadius="md"
        p={4}
        ml={12}
        display="flex"
        gap={"12px"}
        bg="white"
      >
        <Box
          background={"black"}
          borderRadius={"full"}
          width={"40px"}
          h={"40px"}
        ></Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Full Stack developer
          </Text>
          <Text fontSize="sm">synetics GmbH</Text>
        </Box>
        <Box ml="auto" display="flex" flexDirection="row" gap="24px">
          <Box display="flex" alignItems={"flex-end"} flexDirection={"column"}>
            <Button
              mb={2}
              color={"red.600"}
              bg={"red.300"}
              borderRadius={"24px"}
              width={"80px"}
              h={"max-content"}
            >
              Not A Fit
            </Button>
            <Text fontSize="sm">Applied on 05/31/2023</Text>
          </Box>

          <IconButton icon={<BsThreeDots />} aria-label="Add" />
        </Box>
      </Box>
      <Box
        bg="white"
        width={"90%"}
        flex="1"
        border="1px solid black"
        borderRadius="md"
        p={4}
        ml={12}
        gap={"12px"}
        display="flex"
      >
        <Box
          background={"black"}
          borderRadius={"full"}
          width={"40px"}
          h={"40px"}
        ></Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Java / Web Developer (with German)(m/w/d) GJW1/04/23
          </Text>
          <Text fontSize="sm">European Dynamics</Text>
        </Box>
        <Box ml="auto" display="flex" flexDirection="row" gap="24px">
          <Box display="flex" alignItems={"flex-end"} flexDirection={"column"}>
            <Button
              mb={2}
              bg={"gray.200"}
              borderRadius={"24px"}
              width={"80px"}
              h={"max-content"}
            >
              Submitted
            </Button>
            <Text fontSize="sm">Applied on 05/31/2023</Text>
          </Box>

          <IconButton icon={<BsThreeDots />} aria-label="Add" />
        </Box>
      </Box>
      <Box
        width={"90%"}
        flex="1"
        border="1px solid black"
        borderRadius="md"
        p={4}
        mr={4}
        ml={12}
        gap={"12px"}
        display="flex"
        bg="white"
      >
        <Box
          background={"black"}
          borderRadius={"full"}
          width={"40px"}
          h={"40px"}
        ></Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Frontend Develper (m/f/d)
          </Text>
          <Text fontSize="sm">Ninebarc GmbH</Text>
        </Box>
        <Box ml="auto" display="flex" flexDirection="row" gap="24px">
          <Box display="flex" alignItems={"flex-end"} flexDirection={"column"}>
            <Button
              mb={2}
              bg={"red.300"}
              borderRadius={"24px"}
              color={"red.600"}
              width={"80px"}
              h={"max-content"}
            >
              Not A Fit
            </Button>
            <Text fontSize="sm">Applied on 05/31/2023</Text>
          </Box>

          <IconButton icon={<BsThreeDots />} aria-label="Add" />
        </Box>
      </Box>
    </Flex>
  );
};
export default MainContent;
