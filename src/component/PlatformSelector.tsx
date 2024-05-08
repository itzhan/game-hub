import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hook/usePlatforms";
import findPlatform from "../hook/useFindPlatform";
import useGameQuery from "../store/gameQueryStore";

const PlatformSelector = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  const setPlatformId = useGameQuery((s) => s.setPlatformId);
  const { data, error } = usePlatfroms();
  const selectPlatform = findPlatform(gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "PlatForms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
