import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hook/usePlatforms";
import { Platforms } from "../hook/useGames";

interface Props {
    onSelectform: (platform: Platforms) => void;
    selectPlatform: Platforms | null;
}

const PlatformSelector = ({ onSelectform, selectPlatform }: Props) => {
  const { data, error } = usePlatfroms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || 'PlatForms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
