import { useState } from "react";

import Buttons from "./UI/MyButton/Buttons";
import Inputs from "./UI/MyInput/Inputs";

const PostForm = ({create}) => {
    // Создаем состяние который передаем в управляемый инпут
    const [post, setPost] = useState({title: '', body: ''})

    // Cоздаем новые посты и потом очищаем
    const addNewPost = (e) => {
        e.preventDefault()
       // Проверяем, что оба title и body не пусты
        if (post.title.trim() !== '' || post.body.trim() !== '') {
            const newPost = {
                ...post, id: Date.now()
            };
            create(newPost); // Вызываем create только если оба поля не пусты
            setPost({ title: '', body: '' }); // Очищаем инпуты
        } else {
            // Обрабатываем случай, когда хотя бы одно из полей title или body пустое
            console.log('Пожалуйста, введите и title, и body.');
        }
    }

    return (
        <form >
            {/* Создали управляемый инпут с новыми компонентами */}
            <Inputs type="text" value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder='Названия поста' />
            <Inputs type="text" value={post.body} onChange={e => setPost({...post, body: e.target.value})} placeholder='Описания поста' />
            <Buttons onClick={addNewPost} >Создать посты</Buttons>
        </form>
    );
};

export default PostForm;