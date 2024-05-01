import { Card, Img, CardBody, Heading } from "@chakra-ui/react";
import { Games } from "../hook/useGames";

interface Props {
  game: Games;
}

const GameCrad = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"}>
      <Img src={game.background_image}></Img>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCrad;
