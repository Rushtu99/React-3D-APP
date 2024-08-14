import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./slice/settingsSlice";
let store = configureStore({
    reducer: {
        settings: settingsSlice,
    },
});

export default store;
