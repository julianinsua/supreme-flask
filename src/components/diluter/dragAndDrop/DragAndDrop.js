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
		//I destination = null (dropped outside a droppable component) then do nothing
		if (!destination) {
			return;
		}
		//List order persistance
		const sourceColumn = columns[source.droppableId];
		const destinationColumn = columns[destination.droppableId];
		if (sourceColumn.id === destinationColumn.id) {
			//Handle single column drag and drop
			const newElementIds = Array.from(sourceColumn.elementIds);
			newElementIds.splice(source.index, 1);
			newElementIds.splice(destination.index, 0, draggableId);
			const newColumn = { ...sourceColumn, elementIds: newElementIds };

			const newStateSingle = { ...columns, [sourceColumn.id]: newColumn };

			setColumns(newStateSingle);
		} else {
			//Handle multicolumn drag and drop
			const newElementsIdsSource = Array.from(sourceColumn.elementIds);
			const newElementsIdsDestination = Array.from(
				destinationColumn.elementIds
			);
			newElementsIdsSource.splice(source.index, 1);
			newElementsIdsDestination.splice(destination.index, 0, draggableId);

			const newColumnSource = {
				...sourceColumn,
				elementIds: newElementsIdsSource,
			};
			const newColumnDestination = {
				...destinationColumn,
				elementIds: newElementsIdsDestination,
			};

			const newStateDouble = {
				...columns,
				[sourceColumn.id]: newColumnSource,
				[destinationColumn.id]: newColumnDestination,
			};
			setColumns(newStateDouble);
		}
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
