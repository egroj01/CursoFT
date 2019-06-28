import React, { Component } from 'react';
import PropTypes from 'prop-types'


import Task from './Task'; //Importo el componente para poder usar sus props y pasarle props

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task =>
    <Task
      task={task}
      key={task.id}
      deleteTask={this.props.deleteTask} // aqui le estoy pasando el metodo como una props que declare en app.js
      checkTask={this.props.checkTask}
    />);
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;
