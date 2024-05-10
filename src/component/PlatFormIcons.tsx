import { Icon, Wrap, WrapItem } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatFormIcons = ({ platforms: platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <>
      <Wrap marginY={"8px"} spacing="10px">
        {platforms.map((platform) => (
          <WrapItem key={platform.id}>
            <Icon as={iconMap[platform.slug]} color="gray.500" />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default PlatFormIcons;
