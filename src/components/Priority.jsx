import React from 'react'

function Priority({ todo, updatePriority }) {
  return (
    <div className='priority-box'>
      <span>優先度</span>
      <div className='priority-input'>
        {[1, 2, 3].map((pri) => (
            <div 
              key={`${todo.id}-${pri}`}
              className={`priority-element ${todo.priority >= pri ? "active" + todo.priority : ""}`}
              onClick={() => updatePriority(todo.id, pri)}
            />
        ))}
      </div>
    </div>
  )
}

export default Priority