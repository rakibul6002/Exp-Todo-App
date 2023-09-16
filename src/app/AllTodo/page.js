'use client'
import AllTodos from '@/components/AllTodos';
import Link from 'next/link';
import React from 'react';

const AllTodopage = () => {
  return (
    <div>
      <div className='max-w-xl mx-auto border border-gray-400 mt-5 py-6 px-4'>
        <p className='text-4xl font-semibold flex items-center justify-center'>ToDo List</p> 
        <div className='mt-8'>
          <AllTodos/>
        </div>
      </div>
      <div className=  'flex items-center justify-center mx-auto mt-10'>
        <Link href={'/'}>
          <button className='bg-green-500 px-3 py-2 rounded-lg font-semibold'>
            Go to Home page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AllTodopage