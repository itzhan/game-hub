import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCrad from "./GameCrad";
import GameCradSkeleton from "./GameCradSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hook/useGames";
import React from "react";

const GameGrid = () => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const totalGames = data?.pages.reduce(
    (total, page) => (total += page.results.length),
    0
  );

  return (
    <InfiniteScroll
      dataLength={totalGames || 0}
      next={fetchNextPage}
      hasMore={hasNextPage ? hasNextPage : false}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={4}
        padding="10px"
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
    </InfiniteScroll>
  );
};
export default GameGrid;
