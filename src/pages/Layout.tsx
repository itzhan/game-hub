import { Box } from "@chakra-ui/react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayOut;
