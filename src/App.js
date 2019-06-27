import React, {Component} from 'react';

// styles
import './App.css';

// DB
import tasks from './example/tasks.json';

// My components
import Tasks from './components/Tasks';

class App extends Component {
  state = {
    tasks: tasks
    // tasks // puede ser solo task xq se llama igual
  }

  render() {
    return(
      <div>
        <Tasks tasks={this.state.tasks}/> {/* aqui traigo los valores del state */}
      </div>
    )
  }
}

export default App;
