import React, {Component} from 'react';

// styles
import './App.css';

// DB
import tasks from './example/tasks.json';

// My components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'
class App extends Component {
  state = {
    tasks: tasks
    // tasks // puede ser solo task xq se llama igual
  }

  render() {
    return(
      <div>
        <TaskForm />
        <Tasks tasks={this.state.tasks}/> {/* aqui traigo los valores del state para usarlos despues*/}
      </div>
    )
  }
}

export default App;
