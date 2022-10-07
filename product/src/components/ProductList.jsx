import React, { useState, useEffect } from "react";

import { GridItem, Grid, Box, Text } from "@chakra-ui/react";

// Data
import { products } from "../data";

import { pubsub } from "container/pubsub";

// Components
import Product from "./Product";

const ProductList = () => {
  const [search, setSearch] = useState("");

  const searchProduct = () => {
    pubsub.subscribe("searchProduct", (data) => {
      setSearch(data);
    });
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <Box my="20px">
      {filteredProducts.length > 0 && (
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
          gap={5}
        >
          {filteredProducts.map((product) => (
            <GridItem>
              <Product key={product.id} product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
      {filteredProducts.length === 0 && (
        <Text fontWeight={600} textAlign="center" my="20px" fontSize="20px">
          There is no product
        </Text>
      )}
    </Box>
  );
};

export default ProductList;
