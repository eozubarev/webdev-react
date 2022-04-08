import React, { Component } from 'react';

class Test extends Component {

    constructor (props) {
        console.clear();
        console.log('construktor');
        console.log(props);
        super ();
        this.state = {
            s1 : 0
        }
    }

    buttonHandler = () => {
        let val = this.state.s1;
        val++
        this.setState ({ s1 : val })
        console.log('work');
    }

    // Можно посмотреть что лежит в пропсах проверить изменились ли они и перезаписать если нужно
    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        // return ({ "s1" : props.arg })
        return null;
    }

    // Может использоваться чтобы запустить что то после окончания отрисовки компонента
    componentDidMount() {
        console.log('componentDidMount');
    }

    // Если нужно после каждого обновления компонента что-то делать, нужно исп этот метод
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render1');
        return (
            <div>
                {console.log('render 2')}
                <button onClick={this.buttonHandler}>Push</button>
                {this.state.s1}
            </div>
        );
    }
}

export default Test;
