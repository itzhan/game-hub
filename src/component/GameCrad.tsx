import { Card, Img, CardBody, Heading, Text } from "@chakra-ui/react";
import { Games } from "../hook/useGames";
import PlatFormIcons from "./PlatFormIcons";

interface Props {
  game: Games;
}

const GameCrad = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"}>
      <Img src={game.background_image}></Img>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIcons
          platforms={game.platforms.map((p) => p.platform)}
        ></PlatFormIcons>
      </CardBody>
    </Card>
  );
};

export default GameCrad;
