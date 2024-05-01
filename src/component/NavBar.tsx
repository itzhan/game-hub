import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../image/logo.webp";
import SwitchColorMode from "./SwitchColorMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} alt="logo" boxSize="60px"></Image>
      <SwitchColorMode></SwitchColorMode>
    </HStack>
  );
};

export default NavBar;
