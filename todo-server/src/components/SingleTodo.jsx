import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToTodo } from '../redux/todo/action';

function SingleTodo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos.todos);
    console.log(todos);


    useEffect(() => {
        fetchTodo();
    }, [])

    function fetchTodo() {
        axios.get(`http://localhost:8080/posts/${id}`)
            .then((res) => dispatch(addToTodo([res.data])));
    }


    const deleteTodo = (id) => {
        axios.delete(`http://localhost:8080/posts/${id}`)
            .then((res) => navigate('/'));


    }


    return (
        <div>

            {
                todos.map((todo) => {
                    return <div>
                        <p key={todo.id} >{todo.task}</p>
                        <button onClick={() => {
                            deleteTodo(id);
                        }}>Delete</button>
                    </div>
                })

            }



        </div>
    )
}

export default SingleTodo