import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/firebase";

import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const [job, setjob] = useState("");
  const [company, setcompany] = useState("");
  const [img_url, setImg_url] = useState("");
  const [tag, setTag] = useState("");
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "join"), {
        job: job,
        company: company,
        img_url: img_url,
        tag: tag,
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Flex>
      <FormControl>
        <FormLabel>job</FormLabel>
        <Input
          value={job}
          type="text"
          onChange={(e) => setjob(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>company</FormLabel>
        <Input
          value={company}
          type="text"
          onChange={(e) => setcompany(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>image</FormLabel>
        <Input
          value={img_url}
          type="text"
          onChange={(e) => setImg_url(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>label</FormLabel>
        <Input
          value={tag}
          type="text"
          onChange={(e) => setTag(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
};
export default Form;
