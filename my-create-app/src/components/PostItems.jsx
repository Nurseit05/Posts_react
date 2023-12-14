import React from 'react';

import '../style/App.scss'
import Buttons from './UI/MyButton/Buttons';
import { useNavigate } from 'react-router-dom';

const PostItems = ({post, remove}) => {// Мы можем через {} достать название пропсор а не пишя props
    const histori = useNavigate()
    return (
        <div className='post' >
            <div className="post__content">
                {/* Данные отоброжаеть от самого пропса при использование компонета и использование props */}
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                {/* При нажатья кнопку мы запускаем remove с передачей данные post наверх */}
                <Buttons onClick={() => histori(`/${post.id}`) } >Создать</Buttons>
                <Buttons onClick={() => remove(post)} >Удалить</Buttons>
            </div>
        </div>
    );
};

export default PostItems;