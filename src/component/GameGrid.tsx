import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCrad from "./GameCrad";
import GameCradSkeleton from "./GameCradSkeleton";
import { GameQuery } from "../App";
import useGames from "../hook/useGames";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoding } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={4}
        padding="10px"
      >
        {isLoding &&
          skeletons.map((s) => <GameCradSkeleton key={s}></GameCradSkeleton>)}
        {data.map((game) => (
          <GameCrad key={game.id} game={game}></GameCrad>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
