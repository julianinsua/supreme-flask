import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { DragAndDrop } from "./dragAndDrop/DragAndDrop";

export const Diluter = () => {
	return (
		<Flex>
			<DragAndDrop />
		</Flex>
	);
};
