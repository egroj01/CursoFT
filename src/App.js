import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


// styles
import './App.css';

// DB
import tasks from './example/tasks.json';

// My components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'
import Posts from './components/Posts';
class App extends Component {
  state = {
    tasks: tasks
    // tasks // puede ser solo task xq se llama igual
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,  //puedo hacerlo asi title: title
      description: description, // //puedo hacerlo asi description: description
      id: this.state.tasks.length // Estoy usando del estado su longitud
    }
    console.log('Creada nueva tarea de id:', newTask.id)
    this.setState({
      tasks: [...this.state.tasks, newTask] // Estoy por decirlo asi concatenandole al estado lo nuevo que le pasaré
    })
  }

  // Este metodo se lo voy a pasar al component TASKS que a su vez lo pasra al subcomponente TASK
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id); //Desde el estado de las tareas voy a filtrarpor cada tara que vas a recorrer regresa
    this.setState({tasks: newTasks})
    console.log('Elimanada la tareade de id:', id)
  }

  checkTask = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return(
      <div>
        <Router>
          <Link to="/"> Home  </Link>
          <Link to="/posts">  Posts </Link>
          <Route exact path="/" render={() => {
            return (
              <div>
                <TaskForm addTask={this.addTask}/>
                {/* Aqui traigo los valores del state y tambien recibe el metodo deleteTask */}
                <Tasks
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                  checkTask={this.checkTask}
                  />
              </div>
              )}}>
          </Route>
          <Route path="/posts" render={() => {
            return (
            <did>
              <Posts />
            </did>
            )}}>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
