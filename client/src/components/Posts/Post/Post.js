import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import RecommendIcon from '@mui/icons-material/Recommend';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch()

    return (

        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <div className='head-title' style={{ display: "grid", gridTemplateColumns: "80% 20%", padding: "10px 0px 0px 15px", color: '#f2f2f2', background: ' #06a9e7' }}>
                <div>
                    <Typography gutterBottom variant="h6" component="h2">{post.creator}</Typography>
                </div>
                <div>
                    <Button style={{ color: 'black' }} onClick={() => setCurrentId(post._id)}>
                        <EditIcon fontSize='small' style={{ color: "#f2f2f2" }} />
                    </Button>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <img src={post.selectedField} style={{ width: "100%", height: "180px", objectFit: 'contain', marginTop: "-8px" }} />
            </div>
            <div>
                <div className='details' style={{ padding: "0px 20px 0px 15px" }}>
                    <Typography style={{ paddingBottom: "5px" }} variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
                    <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography className='title' style={{ padding: "10px 0px 0px 0px" }} gutterBottom variant="h6" component="h3">{post.title}</Typography>
                </div>
                <div style={{ padding: "0px 15px 0px 15px", textAlign: 'justify' }}>
                    <Typography className='msg' gutterBottom >{post.message}</Typography>
                </div>
                <div style={{ margin: "auto", padding: '5px 10px 10px 10px' }}>
                    <Button size='small' color='primary' onClick={() => dispatch(likePost([post._id]))} >
                        <RecommendIcon fontSize='small' />
                        &nbsp;Like&nbsp;
                        {post.likeCount}
                    </Button>
                    <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))} >
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default Post
