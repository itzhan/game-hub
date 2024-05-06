import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms, { Platform } from "../hook/usePlatforms";
import findPlatform from "../hook/useFindPlatform";

interface Props {
  onSelectform: (platform: Platform) => void;
  selectPlatformId?: number;
}

const PlatformSelector = ({
  onSelectform,
  selectPlatformId,
}: Props) => {
  const { data, error } = usePlatfroms();
  const selectPlatform = findPlatform(selectPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "PlatForms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelectform(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
