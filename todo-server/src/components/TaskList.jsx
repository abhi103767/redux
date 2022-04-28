import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToTodo } from '../redux/action'
import { Link } from 'react-router-dom'
function TaskList() {
    const dispatch = useDispatch()
    const todos = useSelector((store) => store.todos);
    const [isFlag, setIsFlag] = useState(false);
    console.log(todos)

    const [formData, setFormData] = useState({
        task: '',
        status: false
    })
    useEffect(() => {
        axios.get(`http://localhost:8080/posts`)
            .then((res) => dispatch(addToTodo(res.data)));
    }, [isFlag])


    // getting change data

    const handleChange = (e) => {
        setFormData((perv) => {
            return {
                ...perv,
                [e.target.name]: e.target.value
            }
        })


        console.log(formData)
    }


    // submit 
    const submit = () => {
        axios.post('http://localhost:8080/posts', {
            ...formData
        })

        setFormData((perv) => {
            return {
                ...perv, task: ''
            }
        })
        setIsFlag((perv) => !perv);

    }

    return (
        <div>
            <input type={'text'} name='task' value={formData.task} onChange={handleChange} />
            <button onClick={submit}>submit</button>
            {
                todos.map((todo) => {
                    return <Link to={`/${todo.id}`} key={todo.id} className='task' >
                        <div>{todo.task}</div>
                    </Link>
                })
            }


        </div >
    )
}

export default TaskList