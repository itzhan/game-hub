import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
        <Text whiteSpace={'nowrap'}>Dark Mode</Text>
    </HStack>
  );
};

export default SwitchColorMode;
