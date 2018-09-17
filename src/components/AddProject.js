import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
	constructor(){
		super();
		this.state = {
			newProject:{}
		}
	}

	static defaultProps = {
		categories: ['category1', 'category2', 'category3']
	}
	
	handleSubmit(e) {
		if(this.refs.title.value === ''){
			alert('title is required');
		} else {
			this.setState({newProject:{
				id: uuid.v4(),				
				title: this.refs.title.value,
				category: this.refs.category.value
			}}, () => {
				this.props.addProject(this.state.newProject);
			});
		}
		e.preventDefault();
	}

  	render() {
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});
	return (
	  <div>
		<h3>Add Project</h3>
		<form onSubmit={this.handleSubmit.bind(this)}>
			<div>
				<label>Title</label><br />
				<input tyle="text" ref="title" />
			</div>
			<div>
				<label>Category</label><br />
				<select ref="category">
					{categoryOptions}
				</select>
			</div>
			<br />
			<input type="submit" value="Submit" />
		</form>
	  </div>
	);
  }
}

export default AddProject;
