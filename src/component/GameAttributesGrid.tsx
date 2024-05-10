import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionList from "./DefinitionList";
import Game from "../entities/Game";
import GameRating from "./GameRating";

interface Props {
  game: Game;
}

const GameAttributesGrid = ({ game }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <DefinitionList term="Platform">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionList>
      <DefinitionList term="Metascore">
        <GameRating score={game.metacritic} />
      </DefinitionList>
      <DefinitionList term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionList>
      <DefinitionList term="Publisher">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionList>
    </SimpleGrid>
  );
};

export default GameAttributesGrid;
