import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PostItems from './PostItems';

// Создали новый компонет который выполняет передачей проспа в map который перебираеть весь массив с данные к пропсу в PostItems
const PostList = ({posts, title, remove}) => {

    // Условия если false мы выводим h1 
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}} >
                Посты не найдены
            </h1>
        )
    }


    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            <TransitionGroup>
            {posts.map((post)  =>
                <CSSTransition
                    key={post.id}
                    timeout={700}
                    classNames="item"
                >
                    <PostItems remove={remove} post={post}  />
                </CSSTransition>
            )}
            </TransitionGroup>

            
        </div>
    );
};

export default PostList;