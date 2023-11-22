import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Link to="/" onClick={() => setSearchText("")}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
