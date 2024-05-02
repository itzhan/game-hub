import { Platforms } from "../hook/useGames";
import { Icon, Text, HStack } from "@chakra-ui/react";
import { FaWindows, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiVexxhost } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { LiaIoxhost } from "react-icons/lia";
import {
  SiPlaystationvita,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
} from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface Props {
  platforms: Platforms[];
}

const PlatFormIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation3: SiPlaystation3,
    playstation4: SiPlaystation4,
    playstation5: SiPlaystation5,
    "ps-vita": SiPlaystationvita,
    "nintendo-switch": BsNintendoSwitch,
    xbox: FaXbox,
    "xbox-one": RiXboxLine,
    "xbox-series-x": SiVexxhost,
    xbox360: LiaIoxhost,
    nintendo: SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    globe: BsGlobe,
  };

  return (
    <>
      <HStack marginY={"8px"}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatFormIcons;
