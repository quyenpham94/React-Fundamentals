import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);


    // add a new todo
    const create = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    
    };

    // update a todo
    const update = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
    }

    // delete a todo by id
    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const todoComponents = todos.map(todo => {
        <Todo   
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />
    })

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    )
}

export default TodoList;    