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

import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    pubsub.subscribe("addToFavorite", (data) => {
      setFavorites((prevFavorite) => [...prevFavorite, data]);
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const onDelete = (favorite) => {
    setFavorites((prevFavorites) =>
      [...prevFavorites].filter((item) => item.id !== favorite.id)
    );
  };

  return (
    <Menu>
      <MenuButton as={Button}>
        <Text>Favorites - {favorites.length}</Text>
      </MenuButton>
      <MenuList w="300px">
        {favorites?.map((favoriteItem) => (
          <MenuItem key={favoriteItem?.id}>
            <FavoriteItem
              favorite={favoriteItem}
              onDelete={() => onDelete(favoriteItem)}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Favorites;
