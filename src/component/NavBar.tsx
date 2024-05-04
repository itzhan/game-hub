import { HStack, Image } from "@chakra-ui/react";
import logo from "../image/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
