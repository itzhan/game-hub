import { Card, Img, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Games } from "../hook/useGames";
import PlatFormIcons from "./PlatFormIcons";
import GameRating from "./GameRating";
import getCropImgUrl from "../services/img-url";

interface Props {
  game: Games;
}

const GameCrad = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"}>
      <Img src={getCropImgUrl(game.background_image)}></Img>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIcons
            platforms={game.platforms.map((p) => p.platform)}
          ></PlatFormIcons>
          <GameRating score={game.metacritic}></GameRating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCrad;
