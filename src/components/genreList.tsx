import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
import GetcropImage from "../services/image-url";
const genreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={GetcropImage(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default genreList;
