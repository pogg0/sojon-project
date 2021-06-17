import React from "react";

interface TodoItemProps {
  name: string;
}

function checkevent(isChecked : boolean){
  if(isChecked) {
    return(
      <div style={{display:'inline', textDecoration:'line-through'}} onChange={(v)=>checkevent(v)}>{props.name}</div>
    )
  }
  else return(
    <div style={{display:'inline'}} onChange={(v)=>checkevent(v)}>{props.name}</div>
  )
}

function TodoItem(props: TodoItemProps) {
  return(
    <div>
      <input type="checkbox"/>
      <div style={{display:'inline'}} onChange={(v)=>checkevent(v)}>{props.name}</div>
    </div>
  )
}

export default TodoItem;