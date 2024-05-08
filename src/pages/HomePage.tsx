import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../component/GenreList";
import GameHeading from "../component/GameHeading";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";
import GameGrid from "../component/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "188px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={"8px"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex mb={5} mt={5}>
            <Box mr={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
