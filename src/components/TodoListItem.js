import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodos, changeCheck }) => {
    const { id, text, checked } = todo;

    const onClick = (id) => {
        removeTodos(id);
    }
    
    return (
        <React.Fragment>
            <div className="TodoListItem">
                <div className={cn("checkbox", { checked })}>
                    {checked ? <MdCheckBox onClick={() => changeCheck(id)}/> : <MdCheckBoxOutlineBlank onClick={() => changeCheck(id)}/>}
                    <div className="text">{ text }</div>
                    <div className="remove">
                        <MdRemoveCircleOutline onClick={() => onClick(id) }/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TodoListItem;