import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import GameHeading from "./component/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "188px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"8px"}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex mb={5} mt={5}>
            <Box mr={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
