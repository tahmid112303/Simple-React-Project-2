import React, { useState } from 'react';
import "./Todo.css"
import { toast } from 'react-toastify';

const Todo = ({todo}) => {
    const {userId,id,title,completed}=todo
    const [clicked,setClicked]=useState(false)

    const handleClicked=()=>{
        setClicked(!clicked)
        if(clicked===false){
            notify()
        }
    }

    const notify=()=>{
        toast("Clicked")
    }
    return (
        <div className='box' style={{background: clicked ? "lightblue" : "white"}}>
            <div>UserID: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed ? "true" : "false"}</div>
            <button onClick={handleClicked} style={{background: "plum"}}>{clicked ? "Clicked" : "Click Me"}</button>
        </div>
    );
};

export default Todo;