import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import useGameQuery from "../store/gameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQuery((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/')
        }
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<CiSearch color="gray.300" />}
        />
        <Input
          ref={ref}
          borderRadius={20}
          type="phone"
          placeholder="Search games.."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
