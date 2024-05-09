import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionList = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize={"medium"} fontWeight={"bold"} color={"gray"}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionList;
