import React, { useState } from "react";
import { Flex, Input } from "@chakra-ui/react";

import { pubsub } from "container/pubsub";

const Search = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    pubsub.publish("searchProduct", e.target.value);
  };

  return (
    <Flex w="50%">
      <Input
        type="text"
        value={search}
        onChange={onChange}
        placeholder="Search..."
        bg="white"
        _focus={{
          borderColor: "#FF6000",
        }}
      />
    </Flex>
  );
};

export default Search;
