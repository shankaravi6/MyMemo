import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'


import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import './styles.css'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'


const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    return (
        <div>
            {/* <Grid className='app-container' xs={12} sm={7}>
                <div className='app-heading'><h2>myJan</h2></div>
                <div className='form-container'>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
                <Grid>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
            </Grid> */}
            <Container maxwidth='lg'>
                <AppBar className='appBar back-img' position='static' color='inherit'>
                    <Typography className='heading' style={{ fontSize: "25px", fontWeight: "500", letterSpacing: "5px", background: '#9ad8eb' }} varient='h2' align='center'>myMemo</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="center" spacing={3}>
                            <Grid item xs={12} sm={7} lg={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid className='form-align' item xs={12} sm={4} lg={5}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App
