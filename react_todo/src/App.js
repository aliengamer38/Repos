import React from "react";
import "./App.css";
import Todos from "./component/Todos";
import Header from "./component/layout/Header";
import AddTodo from "./component/AddTodo";
import uuid from "uuid";

class App extends React.Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: "Take out the trash",
				completed: true
			},
			{
				id: uuid.v4(),
				title: "Dinner with wife",
				completed: true
			},
			{
				id: uuid.v4(),
				title: "Meeting with boss",
				completed: true
			}
		]
	};
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id == id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)]
		});
	};
	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title: title,
			completed: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};
	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
