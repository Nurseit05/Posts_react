import React from 'react';
import Inputs from './UI/MyInput/Inputs';
import Selects from './UI/MySelect/Selects';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Inputs placeholder='Поиск.....' 
                value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <Selects defaultValue='Сортирова' options={[
                {value:'title', name: 'Сортировать по значение'},
                {value:'body', name: 'Сортировать по описание'}
                ]} 
                value={filter.sort}
                onChange={select => setFilter({...filter, sort: select})}
            />
      </div>
    );
};

export default PostFilter;