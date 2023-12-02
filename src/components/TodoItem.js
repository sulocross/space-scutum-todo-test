import React from 'react'
import { useState } from 'react'
import './todoitem.css'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../slices/todoSlice'
import toast from 'react-hot-toast'
import { TodoModal } from './TodoModal'

export default function TodoItem({todo}) {
    const dispatch = useDispatch()
    const [updateModalOpen, setUpdateModalOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
        toast.success('Todo Deleted succesfully!')
    }
    const handleUpdate = () => {
        setUpdateModalOpen(true)
    }
    return (
        <>
        <div className='todoItem'>
            <div className='todoContent'>
                {/* [] */}
                <div>
                    <p className='todoTitle'>
                        {todo.title}
                    </p>
                    <p>{todo.time}</p>
                </div>
            </div>
            <div>
                <div onClick={handleDelete}>
                    <Button>Delete</Button>
                </div>
                <div onClick={handleUpdate}>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
        <TodoModal 
        type='update' 
        modalOpen={updateModalOpen} 
        setModalOpen={setUpdateModalOpen}
        todo={todo}
        />
        </>
    )
}
