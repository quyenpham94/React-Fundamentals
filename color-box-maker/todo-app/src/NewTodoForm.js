import React, { useState } from "react";
import {v4 as uuid} from "uuid";


const NewTodoForm = ({ createTodo }) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const gatherInput = (e) => {
        e.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="task">Task:</label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add a todo!</button>
            </form>
        </div>
    )

}

export default NewTodoForm;