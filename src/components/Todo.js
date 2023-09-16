'use client'
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, jogTodo } from '@/reduxStore/amiparinaSlice ';

const Todo = () => {
    const {todosValue} = useSelector ((state)=>state.todo);

    // const[todoArray,setTodoArray] = useState([]);
    const[todoInput,setTodoInput] = useState("");
    // const[count,setCount] = useState(0);

        const dispatch= useDispatch()
        const saveTodo = (e) =>{

            // setCount(count + 1);
            e.preventDefault();
            if(todoInput === "" ){
                toast.error("Please enter your todo...");
                
            }else{
                
                setTodoInput("");
                dispatch(jogTodo({
                    id:Math.random(),
                    text:todoInput,
                }));
                toast.success("Todo added successful")
                
                
              
            };

           
            
    };
    
  return (
    <div>
        <div className='flex items-center justify-center mt-10'>
            <p className='text-3xl font-semibold'>Todo Application</p>
        </div>
        <div className='w-[500px] h-[250px] bg-slate-400 text-gray-200 flex flex-col items-center justify-center mx-auto mt-5 rounded-md'>
            <input 
                type="text"
                placeholder='Enter your text...' 
                className='w-[400px] h-[50px] rounded-xl px-3 text-gray-900'
                onChange={(e)=>setTodoInput(e.target.value)}
                value={todoInput}
            />
            <button onClick={saveTodo}
            
            className='bg-green-600 px-6 text-4xl mt-5 rounded-lg'>
                Add
            </button>
        </div>


        <div className='w-[500px] h-auto mx-auto mt-12 flex flex-col items-center justify-center gap-5'>
            
            <div className='mt-2 w-[500px] flex flex-col gap-2 '>
                {
                    todosValue.length > 0 ? (
                        
                            todosValue.map((item) => (
                                <p key={item.id} className='w-full bg-gray-950 text-white py-1 px-4 rounded-md flex items-center justify-between'>{item.text}
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
                    
            </div>
        </div>
        <div className='flex items-center justify-center py-20'>
            <Link href={'/AllTodo'}>
            <button className='bg-gray-950 text-gray-200 hover: text-white  px-2 py-2 rounded-md'>
                All Todo
                </button>
            </Link>
            
        </div>
        <Toaster />
    </div>
  )
}

export default Todo