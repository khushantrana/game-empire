import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Metacritic from "./metacritic";

interface Props {
  game: Game;
}

const gameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default gameCard;
