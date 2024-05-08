import {
  ListItem,
  List,
  Img,
  HStack,
  SkeletonText,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenre from "../hook/useGenre";
import getCropImgUrl from "../services/img-url";
import useGameQuery from "../store/gameQueryStore";

const GenreList = () => {
  const { data, isLoading, error } = UseGenre();
  const gameQuery = useGameQuery(s => s.gameQuery)
  const setGenreId = useGameQuery(s => s.setGenreId)
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
                fontWeight={gameQuery.genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
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
