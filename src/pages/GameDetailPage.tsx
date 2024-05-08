import { useParams } from "react-router-dom";
import useGame from "../hook/useGame";
import { Heading, Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Heading>{data?.name}</Heading>
      <p>{data?.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
