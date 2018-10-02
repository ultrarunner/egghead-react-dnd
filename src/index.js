import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
    display: flex;
`;

class App extends React.Component {
    state = initialData;
    onDragStart = result => { };
    onDragUpdate = result => { };
    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        // console.log(result);
        // users drops outside of any list
        if (!destination) {
            return;
        }

        // the user has not moved the object's column and index
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        // re-order the tasks-id array
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        // drag and drop within the same column
        if (start === finish) {
            // create new object to avoid mutating state
            const newTaskIds = Array.from(start.taskIds);
            // remove an item from the array using the index of the source
            newTaskIds.splice(source.index, 1);
            // add an item to the array using the draggableId
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }

            this.setState(newState);
            return
        }

        const startTasksIds = Array.from(start.taskIds);
        startTasksIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTasksIds
        };

        const finishTasksIds = Array.from(finish.taskIds);
        finishTasksIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTasksIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }

        this.setState(newState);
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
            >
                <Container>
                    {
                        this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const tasks = column.taskIds.map(taskId => {
                                return this.state.tasks[taskId]
                            });
                            return <Column key={column.id} column={column} tasks={tasks} />;
                        })
                    };
                </Container>
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
