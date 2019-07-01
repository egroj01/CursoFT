import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

  StyleCompleted() {
      return  {
      fontSize: '20px',
      color: this.props.task.completed ? 'blue' : 'tomato',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { task } = this.props; //destructurin para no usar this.props

    return(
      <p style={this.StyleCompleted()}>
        {task.completed}
        {task.title} -
        {task.description} -
        {this.props.task.id} -
        <input type="checkbox" onChange={this.props.checkTask.bind(this, task.id)}/>
        <button
          style={btnDelete}
          onClick={this.props.deleteTask.bind(this, task.id)} /* estoy recibiendo el method deleteTask como props y bindiando el id */
          title="Elimina la tarea"
        >
          X
        </button>
      </p>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Task;
