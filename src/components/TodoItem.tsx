import React from "react"
import Todo from "../models/todo"

const TodoItem: React.FC<{text: string}> = (props) => {
    return (
        <div>
            <li>{props.text}</li>
        </div>
    )
}

export default TodoItem