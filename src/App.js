import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <ul>
          {
            this.props.todos.map(todo => <li>{todo.text}</li>)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(App);
