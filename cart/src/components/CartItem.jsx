import React from "react";

import { Flex, Text, Image, Box } from "@chakra-ui/react";

import deleteIcon from "../assets/delete.png";

const CartItem = ({ product, onDelete }) => {
  return (
    <Flex position="relative">
      <Box
        position="absolute"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <Image src={deleteIcon} width="25px" height="25px" />
      </Box>
      <Image
        src={product.imageURL}
        alt={product.name}
        width="100px"
        height="150px"
        objectFit="cover"
      />
      <Box ml="10px">
        <Text letterSpacing="0.25px" fontWeight={500}>
          {product.name}
        </Text>
        <Text fontWeight={600} mt="15px">
          ${product.price}
        </Text>
      </Box>
    </Flex>
  );
};

export default CartItem;
