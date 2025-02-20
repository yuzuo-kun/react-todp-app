import React, { useState } from 'react'

function TodoForm({addTodo}) {
  const [text, setText] = useState("");

  // todoの登録前処理
  const handleClick = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={() => handleClick(e)}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='新しいTODOを入力'/>
      <button onClick={handleClick}>登録</button>
    </form>
  )
}

export default TodoForm