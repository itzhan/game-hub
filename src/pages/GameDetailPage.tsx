import { useParams } from "react-router-dom";
import useGame from "../hook/useGame";
import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import ExpendText from "../component/ExpendText";
import GameAttributesGrid from "../component/GameAttributesGrid";
import GameTrailer from "../component/GameTrailer";
import GameScreenShotGrid from "../component/GameScreenShotGrid";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  if (game) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        <GridItem>
          <Heading>{game?.name}</Heading>
          <ExpendText>{game.description_raw}</ExpendText>
          <GameAttributesGrid game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer id={game.id}></GameTrailer>
          <GameScreenShotGrid gameSlug={game.slug} />
        </GridItem>
      </SimpleGrid>
    );
  }
};

export default GameDetailPage;
