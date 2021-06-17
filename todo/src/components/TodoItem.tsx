import React from "react";
import { isConstructorDeclaration } from "typescript";

interface TodoItemProps {
  name: string;
}

function TodoItem(this: any, props: TodoItemProps) {
  return(
    <div>
      <form >
        <input type="checkbox" checked={this.state.checked} onChange={this.checkevent}/>
        <div style={{display:'inline'}}>{props.name}</div>
        </form>
    </div>
  )
}


export default TodoItem;