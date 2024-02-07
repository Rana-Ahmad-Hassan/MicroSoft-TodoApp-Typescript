import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todo{
    data:string[]
    fav:string[]
    searchQuery:string,
}

const initialState:todo={
    data:[],
    fav:[],
    searchQuery:""
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
        },
        handleSearch:(state,action:PayloadAction<string>)=>{
            state.searchQuery=action.payload
            const filterData=state.data.filter((item)=>item.includes(state.searchQuery))
            if(filterData){
                state.data = filterData
            }
        }
    }
})

export const { addTodo,addFavTodo,handleSearch } = todoSlice.actions

export default todoSlice.reducer