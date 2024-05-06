import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
  page: number;
  page_size: number;
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
        lg: "188px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"8px"}>
          <GenreList
            selectGenreId={gameQuery.genreId}
            setSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex mb={5} mt={5}>
            <Box mr={5}>
              <PlatformSelector
                onSelectform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
                selectPlatformId={gameQuery.platformId}
              ></PlatformSelector>
            </Box>
            <SortSelector
              selectOrder={gameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
