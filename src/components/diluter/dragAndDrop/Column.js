import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Material } from "./Material";

export const Column = (props) => {
	return (
		<Flex w='25vw' direction='column' bg='gray.200' p='1rem'>
			<Heading>{props.title}</Heading>
			<Droppable droppableId={props.column.id}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
						style={{
							minHeight: "20rem",
							minWidth: "100%",
						}}
					>
						{props.column.elementIds.map((flask, i) => (
							<Material key={flask} flask={props.flasks[flask]} index={i} />
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</Flex>
	);
};
