import React from 'react';
import st from './Modal.module.scss'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [st.myModal]

    if(visible) {
        rootClasses.push(st.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} >
            {/* stopPropagation при нажатия этого diva не работает функции родителя */}
            <div className={st.Content} onClick={(e => e.stopPropagation())} >
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;