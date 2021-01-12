import { Flex } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import React from "react";

export const Material = (props) => {
	return (
		<Draggable draggableId={props.flask.id} index={props.index}>
			{(provided, innerRef) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<Flex p='0.5rem' my='0.15rem' bg='white'>
						{props.flask.value}
					</Flex>
				</div>
			)}
		</Draggable>
	);
};
