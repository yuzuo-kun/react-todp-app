import React from 'react'

function SortSelect({ sortStatus, setSortStatus }) {
  return (
    <select className='sort-select' value={sortStatus} onChange={(e) => setSortStatus(e.target.value)}>
      <option value="deadLine">納期</option>
      <option value="priority">優先度</option>
      <option value="regist">登録順</option>
      <option value="name-up">名前順（昇順）</option>
      <option value="name-down">名前順（降順）</option>
    </select>
  )
}

export default SortSelect