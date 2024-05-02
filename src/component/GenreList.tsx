import {
  ListItem,
  List,
  Img,
  Text,
  HStack,
  SkeletonText,
} from "@chakra-ui/react";
import UseGenre from "../hook/useGenre";
import getCropImgUrl from "../services/img-url";

const GenreList = () => {
  const { data, isLoding, error } = UseGenre();
  if (error) return null;

  if (isLoding) return <SkeletonText></SkeletonText>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Img
              src={getCropImgUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={"8px"}
            ></Img>
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
