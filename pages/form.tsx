import Form from "@/components/Form";
import { Flex } from "@chakra-ui/react";
import React from "react";

type formProps = {};

const FormPage: React.FC<formProps> = () => {
  return (
    <Flex>
      <Form />
    </Flex>
  );
};
export default FormPage;
