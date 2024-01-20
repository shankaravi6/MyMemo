import React, { useEffect, useState } from 'react'
import './styles.css'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {

    const dispatch = useDispatch()

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedField: ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currentId) {
            dispatch(updatePost(currentId, postData))
        }
        else {
            dispatch(createPost(postData))
        }
        handleClear()
    }

    const handleClear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedField: '' })
    }

    return (
        <div>
            <Paper className='paper'>
                <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
                    <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a memory</Typography>
                    <TextField
                        name='creator'
                        variant='outlined'
                        label='Creator'
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />
                    <TextField
                        name='tile'
                        variant='outlined'
                        label='Title'
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <TextField
                        name='message'
                        variant='outlined'
                        label='Message'
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
                    <TextField
                        name='tags'
                        variant='outlined'
                        label='Tags'
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    />
                    <div className='fileInput'>
                        <FileBase
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedField: base64 })}
                        />
                    </div>
                    <Button
                        className='buttonSubmit'
                        variant='contained'
                        color='info'
                        size='large'
                        type='submit'
                        fullWidth
                    >
                        {currentId ? 'Update' : 'Submit'}
                    </Button>
                    <Button
                        variant='contained'
                        color='error'
                        size='large'
                        onClick={handleClear}
                        fullWidth
                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form
