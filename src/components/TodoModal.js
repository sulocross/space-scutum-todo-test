import React, {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import './modal.css'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../slices/todoSlice'
import { v4 as uuidv4 } from 'uuid';

export const TodoModal = ({type, modalOpen, setModalOpen, todo}) => {

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('incomplete')
    const dispatch = useDispatch()

    useEffect(() => {
        if(type === 'update' && todo){
            setTitle(todo.title)
            setStatus(todo.status)
        } else {
            setTitle('')
            setStatus('incomplete')
        }
    }, [type, todo, modalOpen])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === ''){
            toast.error('Please enter a title.')
            return
        }
        if(title && status) {
            if(type === 'add'){
            dispatch(addTodo({
                id: uuidv4(),
                title,
                status,
                time: new Date().toLocaleString(),
        }))
        toast.success('Task Added Successfully!')
        } 
        if(type === 'update'){
            if (todo.title !== title || todo.status !== status) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    status
                }))
            } else {
                toast.error('No changes made')
            }
            setModalOpen(false)
        }
    }
}
    return (
        modalOpen && (
            <div className='wrapper'>
                <div className='containerModal'>
                    <button className='closeButton' onClick={() => setModalOpen(false)}>x</button>
                    <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='formTitle'>{type === 'update' ? 'Update' : 'Add'} Task</h2>
                        <label htmlFor='title'>
                            Title
                            <input type='text' id="title" value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                        <label htmlFor='status'>
                            Status
                            <select name="status" id='status' value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                                <option value="imcomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className='buttonContainer'>
                            <Button className="addTaskBtn" type="submit">{type === 'update' ? 'Update' : 'Add'}</Button>
                            <Button className="cancelBtn" type="submit" onClick={() => setModalOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}
