import React from 'react'
import Priority from './Priority';

function TodoItem({ todo, deleteTodo, toggleComplete, updateDeadLine, updatePriority }) {
  const getClassNameByDeadLine = () => {
    let className = "";
    if (!todo.completed) {
      const targetDate = new Date(todo.deadLine);
      const today = new Date();
      const diffInDays = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24)); // 1日当たりのmsで整える
      // console.log(diffInDays);
      if (diffInDays <= 0) {
        className = "out"
      } else if (diffInDays <= 3) {
        className = "harry-up";
      } else if (diffInDays <= 6) {
        className = "about-time";
      }
    } else {
      className = "completed";
    }
    return className;
  }

  return (
    <li
      className={getClassNameByDeadLine()}
    >
      <input
        type='checkbox'
        onChange={() => toggleComplete(todo.id)}
        checked={todo.completed}
      />
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.text}
      </span>
      <Priority todo={todo} updatePriority={updatePriority} />
      <input
        className='dead-line'
        type='date'
        value={todo.deadLine}
        onChange={(e) => updateDeadLine(todo.id, e.target.value)}
      />
      <button onClick={() => deleteTodo(todo.id)}>削除</button>
    </li>
  )
}

export default TodoItem