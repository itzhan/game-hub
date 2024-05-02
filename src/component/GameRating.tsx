import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameRating = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      borderRadius={"4px"}
      fontSize={"14"}
    >
      {score}
    </Badge>
  );
};

export default GameRating;
