import React from 'react';
import st from './inputs.module.scss'

const Inputs = ({children, ...props}) => {
    return (
        <input className={st.myInp} {...props} /> // Все пропсы который придохять само вставляеться автоматический
    );
};

export default Inputs;