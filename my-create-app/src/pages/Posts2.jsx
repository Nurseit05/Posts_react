import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import Post from './Post';

const Posts2 = () => {
    const match = useMatch('/')
    return (
        <>
            {match ? <Post/> : null}
            <Outlet/>
        </>
    );
};

export default Posts2;