import React, { useEffect, useState } from 'react';
import { useMatch, useParams, Link } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Buttons from '../components/UI/MyButton/Buttons';
import Loader from '../components/Loader/Loader';

const PostPages = () => {
    const param = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchingByID] = useFetching(async () => {
        const res = await PostService.fetchById(param.id)
        setPost(res.data)
    })

    const [fetchingByComment, Loaders] = useFetching(async () => {
        const res = await PostService.getComments(param.id)
        setComments(res.data)
    })
 
    useEffect(() => {
        fetchingByID()
        fetchingByComment()
    }, [])


    return (
        <>
            <div className='post__comment' style={{marginTop: '30px'}} >
            <h1>Вы открыли пост c ID {param.id} </h1>
            <h5>
                {post.id}: {post.title}
            </h5>
            <h1>Комменты</h1>
            {
                Loaders ? <Loader/> : comments.map(comm => 
                    <div key={comm.id}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )
            }
            <Link to={'/'} >
                <Buttons> Назад </Buttons>
            </Link>
        </div>  
    </>
    );
};

export default PostPages;