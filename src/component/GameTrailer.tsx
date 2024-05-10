import { Spinner, Text } from "@chakra-ui/react";
import useGameTrailer from "../hook/useGameTrailers";

interface Props {
  id: number | string;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailer(id);
  const first = data?.results[0];

  if (error) return <Text>{error.message}</Text>;

  if (isLoading) return <Spinner />;
  
    return first ? (
      <video
        title={first.name}
        src={first.data[480]}
        poster={first.preview}
        controls
      />
    ) : null;
};

export default GameTrailer;
