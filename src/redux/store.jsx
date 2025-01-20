import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlicer";

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})