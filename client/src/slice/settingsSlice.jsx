import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        value: true,
    },
    reducers: {
        disable: (state) => {
            state.value = false;
        },
        enable: (state) => {
            state.value = true;
        },
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { disable, enable, toggle } = settingsSlice.actions;

export default settingsSlice.reducer;
