import { Heading } from "@chakra-ui/react";
import findGenre from "../hook/useFindGenre";
import findPlatform from "../hook/useFindPlatform";
import useGameQuery from "../store/gameQueryStore";


const GameHeading = () => {
  const gameQuery = useGameQuery(s => s.gameQuery)
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
