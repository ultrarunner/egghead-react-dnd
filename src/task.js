import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
padding: 8px;
border: 1px solid lightgrey
border-radius: 2px;
margin-bottom: 8px;
background-color: ${ props => (props.isDragging ? 'lightgrey' : 'white')};
`;

const CircleText = styled.div`
    display: table-cell;
    height: 20px;
    float: right;
 /*change this and the width for the size of your initial circle*/
    width: 20px;
    text-align: center;
    vertical-align: text-bottom;
    border-radius: 50%;
  /*make it pretty*/
    background: #000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  /*change this for font-size and font-family*/
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                    <CircleText>
                        {this.props.task.code}</CircleText>&nbsp;{this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}