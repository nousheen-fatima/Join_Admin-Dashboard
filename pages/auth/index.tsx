import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";
import React from "react";

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      bg={"blackAlpha.200"}
      flexDirection={"column"}
    >
      <Navbar />
      <Flex width={"100%"} height={"90vh"} display={"flex"}>
        <Sidebar />
        <Flex width={"80%"} bg={"gray.100"}>
          <MainContent />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default index;
