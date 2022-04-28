import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToTodo } from '../redux/action';

function SingleTodo() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);



    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${id}`)
            .then((res) => dispatch(addToTodo([res.data])));
    }, [])


    return (
        <div>

            {
                todos.map((todo) => {
                    return <p key={todo.id}>{todo.task}</p>
                })

            }



        </div>
    )
}

export default SingleTodo