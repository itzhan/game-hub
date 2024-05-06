import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import UseGenre from "../hook/useGenre";
import usePlatfroms from "../hook/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = UseGenre();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);

  const {data: platform} = usePlatfroms();
  const selectPlatform = platform.results.find(p => p.id === gameQuery.platformId)

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
