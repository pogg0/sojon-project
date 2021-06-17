import React from "react";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    return this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  render() {
    return (
      <div>
        <h3 style={{ backgroundColor:'lightblue', display:'inline', padding:'140px', paddingBottom:'20px'}}>TODO</h3>
        <br/> <br/><br/>
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx}/>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} />
          <button>{this.state.todoItems.length + 1}번째 할일 목록 추가</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;