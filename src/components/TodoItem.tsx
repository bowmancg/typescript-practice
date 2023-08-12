import React from "react"
import Todo from "../models/todo"
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string}> = (props) => {
    return (
        <div>
            <li className={classes.item}>{props.text}</li>
        </div>
    )
}

export default TodoItem