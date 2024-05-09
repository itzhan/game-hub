import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Pros {
  children: string;
}

const ExpendText = ({ children }: Pros) => {
  const [expand, setExpand] = useState(false);
  if (!children) return null;

  if (children.length < 300) return <Text>{children}</Text>;

  return (
    <Text>
      {expand ? children : children.substring(0, 300) + "..."}{" "}
      <Button
        colorScheme="yellow"
        size={"xs"}
        fontSize="14"
        fontWeight={"blod"}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpendText;
