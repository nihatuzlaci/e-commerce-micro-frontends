import React from "react";

import { Flex, Text, Image, Box } from "@chakra-ui/react";

import deleteIcon from "../assets/delete.png";

const FavoriteItem = ({ favorite, onDelete }) => {
  return (
    <Flex position="relative">
      <Image
        src={favorite.imageURL}
        alt={favorite.name}
        width="100px"
        height="150px"
        objectFit="cover"
      />
      <Box ml="10px">
        <Text letterSpacing="0.25px" fontWeight={500}>
          {favorite.name}
        </Text>
        <Text fontWeight={600} mt="15px">
          ${favorite.price}
        </Text>
      </Box>
      <Box
        position="absolute"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <Image src={deleteIcon} width="25px" height="25px" />
      </Box>
    </Flex>
  );
};

export default FavoriteItem;
