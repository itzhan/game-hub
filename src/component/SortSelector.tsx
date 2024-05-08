import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQuery from "../store/gameQueryStore";

const SortSelector = () => {
  const gameQuery = useGameQuery((s) => s.gameQuery);
  const setSortOrder = useGameQuery((s) => s.setSortOrder);
  const sortOrder = [
    { label: "Relevance", value: "" },
    { label: "Data added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value === gameQuery.sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
