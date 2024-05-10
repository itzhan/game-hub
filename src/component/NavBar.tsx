import { HStack, Image } from "@chakra-ui/react";
import logo from "../image/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} alt="logo" objectFit="cover" boxSize={'60px'} />
      </Link>
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
