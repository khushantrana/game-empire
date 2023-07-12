import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default gameCard;
