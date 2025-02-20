import React from 'react'

function FilterButtons({ filterStatus, setFilterStatus }) {
  return (
    <div className='filter-buttons'>
      <button
        onClick={() => { setFilterStatus("all") }}
        className={filterStatus === "all" ? "active" : ""}
      >
        全て
      </button>
      <button
        onClick={() => { setFilterStatus("active") }}
        className={filterStatus === "active" ? "active" : ""}
      >
        未完了
      </button>
      <button
        onClick={() => { setFilterStatus("completed") }}
        className={filterStatus === "completed" ? "active" : ""}
      >
        完了
      </button>
    </div>
  )
}

export default FilterButtons