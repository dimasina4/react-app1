import React, { Component } from 'react';
import uuid from "uuid";
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  getTodos(){
    
  }
  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Title1",
        category: "category1"
      },
      {
        id: uuid.v4(),
        title: "Title2",
        category: "category2"
      },
      {
        id: uuid.v4(),
        title: "Title3",
        category: "category3"
      }
    ]});
  }
  componentWillMount(){
    this.getTodos();
    this.getProjects();    
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
