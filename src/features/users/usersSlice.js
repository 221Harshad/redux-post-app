import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tommy Shelby" },
  { id: "1", name: "Arthur Shelby" },
  { id: "2", name: "John Shelby" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
