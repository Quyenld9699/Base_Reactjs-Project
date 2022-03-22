import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        name: "Quyen",
        age: 22,
        gender: "men",
    },
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;
