import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todo{
    data:string[]
    fav:string[]
}

const initialState:todo={
    data:[],
    fav:[]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<string>)=>{
            state.data.push(action.payload)

        },
        addFavTodo:(state,action:PayloadAction<string>)=>{
             state.fav.push(action.payload)
        }
    }
})

export const { addTodo,addFavTodo } = todoSlice.actions

export default todoSlice.reducer