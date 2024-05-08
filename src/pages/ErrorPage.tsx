import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../component/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box paddingLeft={5}>
          <Heading>Oops</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exist"
              : "Sorry, There seems to be a problem with the app"}
          </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
