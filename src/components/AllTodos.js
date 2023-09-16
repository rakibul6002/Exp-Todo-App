import React from 'react'
import { useSelector } from 'react-redux'

const AllTodos = () => {
    const {todosValue} = useSelector((state) => state.todo)
  return (
    <div>
        {
                    todosValue.length > 0 ? (
                        
                            todosValue.map((item) => (
                                <p key={item.id} className='w-full bg-gray-950 text-white py-1 px-4 rounded-md flex items-center justify-between mb-5'>{item.text}
                                <span 
                                    onClick={()=> dispatch(deleteTodo(
                                        item.id 
                                    ))}
                                className='uppercase text-sm font-semibold text-red-500 hover:text-white duration-200 cursor-pointer'>
                                    Remove
                                </span>
                                </p>
                            ))
                        
                    ) : ( <p className='flex items-center justify-center mx-auto text-2xl font-semibold '>No todos available...</p> 
                    )}

        {/* {
            todosValue.map((item) =>(
                <p key={item.id}>{item.text}</p>
            ))
        } */}
    </div>
  )
} 

export default AllTodos