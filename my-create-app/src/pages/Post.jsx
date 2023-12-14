import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../style/App.scss'

import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import ModalWindow from '../components/UI/MyModal/ModalWindow'
import Buttons from '../components/UI/MyButton/Buttons'
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/Loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../utils/pages';
import Pagination from '../components/pagination/Pagination'
import { useObserver } from '../hooks/useObserver';
import Selects from '../components/UI/MySelect/Selects';

function Post() {

  // Пропсы мы передали как состояния как массив внутри обьекта
  const [posts, setPosts] = useState([])

  // Состояние сортировки и поиска
  const [filter, setFilter] = useState({sort: '', query: ''})

  // Состояние модальная окно
  const [visible, setVisible] = useState(false)

  // Состояние 100 постов из сервера
  const [totalPages, setTotalPages] = useState(0);

  // Состояние лимита
  const [limit, setLimit] = useState(10)

  // Состояние для страниц
  const [page, setPage] = useState(1)

  // ref для observera
  const refs = useRef()

  // Достаем из своего хука для сервера, и загруска
  const [fetching, isLoading, error] = useFetching( async () => {//callback внутри fetching
    const response = await PostService.fetchPosts(limit, page)// достаем данные из сервера
    setPosts([...posts, ...response.data])// данные получаемые из сервера и ставим в posts
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))// В состояние total мы вызываем функцию для разделение totalCount
  })

  // Вызываем эффек fetching и ставим условия обновление page and limit
  useEffect(() => {
    fetching()
  }, [page,limit])

  // Собвственный хуке ref дем и условия ставим Page меньше total и запустаем callback
  useObserver(refs, page < totalPages, isLoading, () => {
    setPage(page + 1);
  })
 
  // Собственный хуке, посты мы фильтруем сорт и поиск
  const sortAndSeachQuery = usePosts(posts, filter.sort, filter.query)

 

  // Добавления новый посты
  const create = (newPost) => {// newPost приходит от дочерных компонента
    setPosts([...posts, newPost])// newPost мы вставляем в posts
    setVisible(false)
  }

  // Удаления посты
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))// Через фильтер мы задаем условия если posts.id равняеться post.id то false
  }

  // Обновление page из дочерного компонента
  const changePage = (arr) => {
    setPage(arr)
  }

  return (
    <div className='App'>
      {/* При нажатия кнопки мы отрываем модальное окно */}
      <Buttons className='' onClick={() => setVisible(true)} >
        Создать пост
      </Buttons>

      {/* Анимируем открытию модульную окну */}
      <CSSTransition
        in={visible}
        timeout={500}
        classNames="alert" unmountOnExit
      >
        <ModalWindow visible={visible} setVisible={setVisible} >
          {/* внутри модального окно есть форму с добавление нового поста */}
          <PostForm create={create} />
        </ModalWindow>
      </CSSTransition>

      <hr style={{margin: '15px 0'}} />
      {/* Филтер компоненет в пробсами который поднимает наверх данные */}
      <PostFilter setFilter={setFilter} filter={filter} />
      
      {/* Селектере мы задаем value для нового лента поста */}
      <Selects 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Кол-во элементов на странице'
        options={[
          {value: 0, name: '0'},
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать все'}
        ]}
      />

      { error && 
        <h1>Произощла ошибка ${error}</h1> 
      }

      {/* Создается посты */}
      <PostList remove={removePost} posts={sortAndSeachQuery} title='Списох постов' />

      {/* Если пользователь зайдет внизу создаем новые посты */}
      <div ref={refs} style={{height: 10, background: 'white'}} />

      {/*  */}
      {isLoading && 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
          <Loader/>
        </div>
      }

      {/* Пагинация */}
      <Pagination
        page={page}
        changePage={changePage} 
        totalPages={totalPages}
      />


    </div> 
  )
}

export default Post;