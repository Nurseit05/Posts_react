import React, { Component } from 'react';

// Классовый компонент, мы должы экпортироовать Component для работы с ним
class ClassInput extends Component {

    // В constructor мы можем задавать состояния компонета
    constructor(props) {
        super(props);// Мы экспортируем props 
        // Через this.state мы задаем состояния
        this.state = {
            valueInp: 'Введите текс'
        }
    }

    handleChange = (e) => {
        // Для обновления состояния входным значением используйте метод this.setState
        this.setState({ valueInp: e.target.value });
    }

    render() {// Вы классовых компонетах мы работаеть через render 
        return (// Если хотем использовать функции внутри рендера мы должы оброшаться к ким через this. this.state.name, this.funtion и т.д.
            <div>
                {/* Управляемый импунт через OnChange. Мы связали input и valueInp и при изменение в inpute и изменятьеся сщстояния valueInt */}
                <h1>{this.state.valueInp}</h1>
                <input 
                    type="text" value={this.state.valueInp} 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

// Классовый компонент устарел и длинные коды чем вы Функциональный компонент
// Но оно используеться в старый проектах
export default ClassInput;