import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
       
    },
});





// export type RootState = ReturnType<typeof Store.getState>

// export type AppDispatch = typeof Store.dispatch