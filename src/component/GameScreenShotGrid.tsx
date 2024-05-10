import { Img, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshot from "../hook/useGameScreenshot";

interface Props {
  gameSlug: string;
}

const GameScreenShotGrid = ({ gameSlug: slug }: Props) => {
  const { data, error, isLoading } = useGameScreenshot(slug);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid marginY={5} gap={6} columns={{ base: 1, md: 2 }}>
      {data?.results.map((screenshot) => (
        <Img
          key={screenshot.id}
          src={screenshot.image}
          alt="slug screenshot"
          objectFit="cover"
          borderRadius={5}
        ></Img>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShotGrid;
