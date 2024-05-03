import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import PlatformSelector from "./component/PlatformSelector";
import { PlatForm } from "./hook/usePlatforms";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<PlatForm | null>(null);

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
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"8px"}>
          <GenreList
            selectGenre={selectGenre}
            setSelectGenre={(genre) => setSelectGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectform={(platform) => setSelectPlatform(platform)}
          selectPlatform={selectPlatform}
        ></PlatformSelector>
        <GameGrid
          selectGenre={selectGenre}
          selectPlatform={selectPlatform}
          
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
