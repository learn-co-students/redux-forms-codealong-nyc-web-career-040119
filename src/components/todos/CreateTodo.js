import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    todo: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    this.props.addTodo(this.state)
    this.setState({
      todo: ''
    })
  }

  allTodos = () => {
    return this.props.todos.map(todo => {
      return (
        <li key={todo}>{todo}</li>
      )
    })
  }
  render() {
    console.log('CreateTodo state', this.state)
    console.log('CreateTodo props', this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add ToDo</label>
            <input
              name="todo"
              onChange={this.handleChange}
              value={this.state.todo}
              type="text" />
          </p>
          <input type="submit" />
        </form>

        <ul>
          {this.allTodos()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch({ type: "ADD_TODO", payload: todo })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
