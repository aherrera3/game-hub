import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<BsSearch />}
      ></InputLeftElement>
      <Input borderRadius={20} placeholder="Search games.." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
