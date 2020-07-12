import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ addTodos }) => {
    const [value, setValue] = React.useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    const onClick = () => {
        if(value) {
        addTodos(value);
        setValue('');
        }
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className="TodoInsert" onSubmit={ onSubmit }>
            <input value={ value } onChange={ onChange } placeholder="할 일을 입력하세요."/>
            <button onClick={ onClick }>
                <MdAdd/>
            </button>
        </form>
    )
};

export default TodoInsert;