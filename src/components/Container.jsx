import React from 'react';
import AppCard from './Card';

import todos from '../todos';

export default class AppContainer extends React.Component {

    render() {

        const myTodos = todos.filter(item => item.container === this.props.type ) ;
        const todoItems = myTodos.map(todo =>  <AppCard key= {todo.id} todo={todo.todo} container={todo.container}/> );
        return (
            <div className={`container col s3 center-align ${ this.props.color }`}>{this.props.title}
                { todoItems }
            </div>
        )
    }
}

