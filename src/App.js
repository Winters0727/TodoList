import React from 'react';
import TodoTemplates from './components/TodoTemplates';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    { id : 1, text : '리액트의 기초 알아보기', checked : true },
    { id : 2, text : '컴포넌트 스타일링 해보기', checked : true },
    { id : 3, text : '일정 관리 앱 만들어 보기', checked : false },
  ])
  
  const [nextId, setNextId] = React.useState(4);

  const addTodos = (value) => {
    const newTodos = todos.concat({id : nextId, text : value, checked : false});
    setNextId(nextId + 1);
    setTodos(newTodos);
  }

  const removeTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  
  const changeCheck = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, checked : !todo.checked} : todo,
    )
    )  
  }

  return (
   <React.Fragment>
     <TodoTemplates>
       <TodoInsert addTodos={ addTodos }/>
       <TodoList todos={ todos } removeTodos={ removeTodos } changeCheck={ changeCheck }/>
     </TodoTemplates>
   </React.Fragment>
  );
}

export default App;
