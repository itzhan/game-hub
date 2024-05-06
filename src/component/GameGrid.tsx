import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";

import GameCrad from "./GameCrad";
import GameCradSkeleton from "./GameCradSkeleton";
import { GameQuery } from "../App";
import useGames from "../hook/useGames";
import React from "react";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((s) => <GameCradSkeleton key={s}></GameCradSkeleton>)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCrad key={game.id} game={game}></GameCrad>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && <Button marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loding...' : 'Look More...'}</Button>}
    </Box>
  );
};
export default GameGrid;
