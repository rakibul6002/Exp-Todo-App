'use client'
import AllTodos from '@/components/AllTodos';
import React from 'react';

const AllTodopage = () => {
  return (
    <div>
      <div className='max-w-xl mx-auto border border-gray-400 mt-5 py-6 px-4'>
        <p className='text-lg font-semibold '>All todos</p> 
        <div>
          <AllTodos/>
        </div>
      </div>
    </div>
  )
}

export default AllTodopage