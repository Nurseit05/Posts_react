import React from 'react';

// Создали стил через module чтобы использовать внутри стили нужно имя задать st
import st from './buttons.module.scss'

const Buttons = ({children, ...props}) => {
    return (
        <button
            {...props} // Все пропсы который придохять само вставляеться автоматический
            className={st.myBtn} // Через точки обращаемся к стиля который там есть
        >
            {children}
        </button>
    );
};

export default Buttons;