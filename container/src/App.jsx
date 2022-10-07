import React from "react";

import app from "./assets/app.png";

// Fragments
import Cart from "cart/Cart";
import Favorites from "favorite/Favorites";
import Search from "search/Search";
import ProductList from "product/ProductList";

import { Container, Flex, Image } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.lg">
      <Flex
        px="20px"
        py="20px"
        w="100%"
        alignItems="center"
        boxShadow="md"
        bg="#FF6000"
        justifyContent="space-between"
        borderBottomRadius="16px"
      >
        <Image src={app} w="50px" h="50px" />
        <Search />
        <Favorites />
        <Cart />
      </Flex>
      <ProductList />
    </Container>
  );
}

export default App;
