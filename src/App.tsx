import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import PlatformSelector from "./component/PlatformSelector";
import { PlatForm } from "./hook/usePlatforms";
import SortSelector from "./component/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: PlatForm | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "225px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setGameQuery({...gameQuery, search})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"8px"}>
          <GenreList
            selectGenre={gameQuery.genre}
            setSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} mb={5}>
          <Box mr={5}>
            <PlatformSelector
              onSelectform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectPlatform={gameQuery.platform}
            ></PlatformSelector>
          </Box>
          <SortSelector
            selectOrder={gameQuery.sortOrder}
            onSelectOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          ></SortSelector>
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
