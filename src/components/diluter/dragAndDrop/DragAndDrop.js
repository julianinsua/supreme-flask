import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { materials } from "../../../helpers/materials";
import { Column } from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export const DragAndDrop = () => {
	const [flasks, setFlasks] = useState(materials.flasks);
	const [pippetes, setPippetes] = useState(materials.pippetes);
	const [columns, setColumns] = useState(materials.columns);
	const [columnOrder, setColumnOrder] = useState(materials.columnOrder);

	const onDragEndHandler = (result) => {
		const { destination, source, draggableId } = result;
		//I destination = null then do nothing drag was cancelled
		if (!destination) {
			return;
		}
		//if the dragg moves the element to the same column and the same index then do nothing
		if (
			destination.columnId === source.columnId &&
			destination.index === source.index
		) {
			return;
		}
		//List order persistance
		const column = columns[source.droppableId];
	};

	return (
		<Flex>
			<DragDropContext onDragEnd={onDragEndHandler}>
				{columnOrder.slice(0, 2).map((columnId) => {
					const column = columns[columnId];
					const title = column.title;
					return (
						<Column
							key={column.id}
							title={title}
							column={column}
							flasks={flasks}
						/>
					);
				})}
			</DragDropContext>
		</Flex>
	);
};
