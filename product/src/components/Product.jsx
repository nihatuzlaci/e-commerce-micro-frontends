import React from "react";

import { Box, Image, Text, Flex, Button, useToast } from "@chakra-ui/react";

import { pubsub } from "container/pubsub";

import favoriteIcon from "../assets/favorite.png";

const Product = ({ product }) => {
  const toast = useToast();

  const addToCart = (product) => {
    toast({
      status: "info",
      description: `${product.name} added to cart`,
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });

    pubsub.publish("addToCart", product);
  };

  const addToFavorite = (favorite) => {
    toast({
      status: "info",
      description: `${product.name} added to favorites`,
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    });

    pubsub.publish("addToFavorite", favorite);
  };

  return (
    <Box>
      <Image
        src={product.imageURL}
        borderRadius="16px"
        height="500px"
        objectFit="cover"
      />
      <Text my="6px" fontWeight={500}>
        {product.name}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight={600}>${product.price}</Text>
        <Flex alignItems="center">
          <Box mr="8px" cursor="pointer" onClick={() => addToFavorite(product)}>
            <Image src={favoriteIcon} width="30px" height="30px" />
          </Box>
          <Button
            bg="#FF6000"
            color="white"
            _hover={{ bg: "rgba(255, 96, 0,0.8)" }}
            _active={{
              bg: "rgba(255, 96, 0,0.7)",
            }}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Product;
