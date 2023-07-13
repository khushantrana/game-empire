import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import GetcropImage from "../services/image-url";
const genreList = () => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={GetcropImage(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default genreList;
