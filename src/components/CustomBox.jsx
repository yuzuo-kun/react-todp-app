import React, { useState } from 'react'
import SortSelect from './SortSelect'
import FilterButtons from './FilterButtons'

function CustomBox({ filterStatus, setFilterStatus, sortStatus, setSortStatus }) {
  return (
    <div className='custom-box'>
      <SortSelect sortStatus={sortStatus} setSortStatus={setSortStatus} />
      <FilterButtons filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>
  )
}

export default CustomBox