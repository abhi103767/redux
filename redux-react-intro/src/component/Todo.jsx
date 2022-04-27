import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToTodo } from '../Redux/Action';
import { deleteTodo } from '../Redux/Action';
import { store } from '../Redux/Store';

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos)
    console.log(todos)
    const [formData, setFormData] = useState({
        id: nanoid(),
        name: ''
    });

    function handleChange(e) {

        setFormData((perv) => {

            return {
                ...perv,
                [e.target.name]: e.target.value
            }
        })
        // console.log(formData)


    }

    return (
        <div>
            <input type={'text'} onChange={handleChange} name='name' value={formData.name} />
            <button onClick={() => {
                // console.log(formData)
                dispatch(addToTodo(formData))
                setFormData((perv) => {
                    return { ...perv, id: nanoid(), name: '' }
                })
            }}>ADD</button>
            {
                todos.map((item, i) => {
                    console.log(item.name)
                    return (<div key={i}>
                        <div>{item.name}</div>
                        <button onClick={() => {
                            dispatch(deleteTodo(item.id))
                        }}>delete</button>
                    </div>)
                })
            }
        </div>
    )
}

export default Todo