import React from "react";
import { useState } from "react";
import styles from "./todo.module.css";


const TodoItem = ({todo, onDelete}) => {

    return(
        <div className="{style.todo} key = {todo.id}">
            <input
                type="checkbox"
                checked = {isCompleted}
                onChange={(e) => {
                    setIsCompleted(e.target.checked);
                }}
            />

            <div className={isCompleted ? styles.striked : ""}>{todo.value}</div>

            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;