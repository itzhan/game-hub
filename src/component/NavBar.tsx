import { HStack, Image } from "@chakra-ui/react";
import logo from "../image/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

const NavBar = () => {

  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
