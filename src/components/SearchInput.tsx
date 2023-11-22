import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null); //ref to the search input
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // to prevent the form to be posted to the server
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch />}
        ></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games.."
          variant="filled"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
