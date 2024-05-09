import { useParams } from "react-router-dom";
import useGame from "../hook/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpendText from "../component/ExpendText";
import GameAttributesGrid from "../component/GameAttributesGrid";
import GameTrailer from "../component/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  if (game) {
    return (
      <div>
        <Heading>{game?.name}</Heading>
        <ExpendText>{game.description_raw}</ExpendText>
        <GameAttributesGrid game={game} />
        <GameTrailer id={game.id}></GameTrailer>
      </div>
    );
  }
};

export default GameDetailPage;
