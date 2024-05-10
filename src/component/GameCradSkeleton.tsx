import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCradSkeleton = () => {
  return (
    <Card width={'100%'} borderRadius={8} overflow={"hidden"}>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCradSkeleton;
