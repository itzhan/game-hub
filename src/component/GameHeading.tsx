import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import findGenre from "../hook/useFindGenre";
import findPlatform from "../hook/useFindPlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = findGenre(gameQuery.genreId)
  const selectPlatform = findPlatform(gameQuery.platformId)

  const heading = `${selectPlatform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
