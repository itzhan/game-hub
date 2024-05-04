import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<CiSearch color="gray.300" />}
      />
      <Input borderRadius={10} type="phone" placeholder="Search games.." variant='filled'/>
    </InputGroup>
  );
};

export default SearchInput;
