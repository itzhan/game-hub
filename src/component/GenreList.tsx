import {
  ListItem,
  List,
  Img,
  HStack,
  SkeletonText,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenre, { Genre } from "../hook/useGenre";
import getCropImgUrl from "../services/img-url";

interface Props {
  setSelectGenre: (genre: Genre) => void;
  selectGenreId?: number | null;
}

const GenreList = ({ setSelectGenre, selectGenreId: selectGenre }: Props) => {
  const { data, isLoading, error } = UseGenre();
  if (error) return null;

  if (isLoading) return <SkeletonText></SkeletonText>;

  return (
    <>
      <Heading fontSize={"2xl"} mb={3} mt={4}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"6px"}>
            <HStack>
              <Img
                src={getCropImgUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={"8px"}
                objectFit="cover"
              ></Img>
              <Button
                fontWeight={selectGenre === genre.id ? "bold" : "normal"}
                onClick={() => setSelectGenre(genre)}
                variant="link"
                fontSize="large"
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
