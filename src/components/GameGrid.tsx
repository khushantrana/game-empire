import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useData from "../hooks/useData";
const GameGrid = () => {
  const { data, error, isLoading } = useData<Game>("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((Game) => (
          <GameCard key={Game.id} game={Game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
