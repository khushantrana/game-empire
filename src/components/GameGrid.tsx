import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
        {data.map((Game: Game) => (
          <GameCard key={Game.id} game={Game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
