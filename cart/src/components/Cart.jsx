import React, { useEffect, useState } from "react";

import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { pubsub } from "container/pubsub";

import CartItem from "./CartItem";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const getProducts = () => {
    pubsub.subscribe("addToCart", (data) => {
      setCartList((prevCart) => [...prevCart, data]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const onDelete = (product) => {
    setCartList((prevCartItem) =>
      [...prevCartItem].filter((item) => item.id !== product.id)
    );
  };

  return (
    <Menu>
      <MenuButton as={Button}>
        <Text>Cart - {cartList.length}</Text>
      </MenuButton>
      <MenuList w="300px">
        {cartList?.map((cartItem) => (
          <MenuItem key={cartItem?.id}>
            <CartItem product={cartItem} onDelete={() => onDelete(cartItem)} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Cart;
