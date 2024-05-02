import {
  ListItem,
  List,
  Img,
  Text,
  HStack,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import UseGenre, { Genre } from "../hook/useGenre";
import getCropImgUrl from "../services/img-url";

interface Props {
  setSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ setSelectGenre } : Props) => {
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
            <Button onClick={() => setSelectGenre(genre)} variant='link' fontSize="large">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
