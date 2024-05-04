import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
// 获取input输入？将其用form包裹起来 处理提交状态即可？如何获取？使用useRef
// event.current.value指向其值
// 将值传递给父级 然后传递给搜索函数

interface Props {
    onSearch: (searchInput: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
