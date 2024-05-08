import { Card, Img, CardBody, Heading, HStack, Link } from "@chakra-ui/react";
import { Game } from "../hook/useGames";
import PlatFormIcons from "./PlatFormIcons";
import GameRating from "./GameRating";
import getCropImgUrl from "../services/img-url";
import GameCardEmoji from "./GameCardEmoji";
import { Link as routerLink } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCrad = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={"hidden"} className="card">
      <Img src={getCropImgUrl(game.background_image)}></Img>
      <CardBody>
        <HStack justifyContent={"space-between"} mb={3}>
          <PlatFormIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIcons>
          <GameRating score={game.metacritic}></GameRating>
        </HStack>
        <Heading fontSize="2xl">
          <Link as={routerLink} to={`/games/${game.slug}`}>
            {game.name}
          </Link>
          <GameCardEmoji rating={game.rating_top}></GameCardEmoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCrad;
