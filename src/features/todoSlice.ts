import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todo {
    data: string[]
    impTodo: string[]
    searchQuery: string,
    login: Boolean,
    toggleTheme: any
}

const initialState: todo = {
    data: [],
    impTodo: [],
    searchQuery: "",
    login: false,
    toggleTheme: null
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.data.push(action.payload)

        },
        addFavTodo: (state, action: PayloadAction<string>) => {
            state.impTodo.push(action.payload)
        },
        handleSearch: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
            const filterData = state.data.filter((item) => item.includes(state.searchQuery))
            if (filterData) {
                state.data = filterData
            } else {
                alert("Particular todo does not exist")
            }
        },
        handleLogin: (state) => {
            state.login = true
        },
        handledelete: (state, action: PayloadAction<string>) => {
            const deleteItem = action.payload;
            const newData = state.data.filter((item) => item !== deleteItem)
            state.data = newData;
            const impNewData = state.impTodo.filter((item)=>item!==deleteItem)
            state.impTodo=impNewData
        },
        handleLogOut: (state) => {
            state.login = false;
        },
        handleToggleTheme: (state) => {
            state.toggleTheme = !state.toggleTheme
        }
    }
})

export const { addTodo, addFavTodo, handleSearch, handleLogin, handledelete, handleLogOut, handleToggleTheme } = todoSlice.actions

export default todoSlice.reducer