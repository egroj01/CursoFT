import React, { Component } from 'react'

export default class TaskForm extends Component {
  state = {
    title: '',
    description: ''
  }

  onSubmit = e => {
//    console.log(this.state)
    e.preventDefault();
  }

  onChange = e => {
//    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write task"
          onChange={this.onChange}
          value={this.state.title}
          />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Describe la tarea"
          onChange={this.onChange}
          value={this.state.description}
          />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
