
import { createSlice } from "@reduxjs/toolkit";


// initialstate
    const initialState = {
        todosValue: [],
    };

// reducers
    export const amiparinaSlice = createSlice({
        name: 'todo',
        initialState,
        reducers:{
            jogTodo:(state,action)=>{
                const agerTodo = state.todosValue.map((item)=>item.id === action.payload.id);
                if(agerTodo){
                    state.todosValue.push(action.payload);
                }else{

                    state.todosValue = action.payload;
                }

            },
                deleteTodo: (state,action) => {
                    state.todosValue = state.todosValue.filter((item)=>
                    
                        item.id !== action.payload
                    );
                    
                }

            // deletTodo:(state,action) => {
            //     state.todosValue = state.todosValue.filter((item) =>{
            //         item.id !== action.payload.id;
            //     })
            // }
        }

    });

// export
export const {jogTodo, deleteTodo} = amiparinaSlice.actions;

export default amiparinaSlice.reducer;