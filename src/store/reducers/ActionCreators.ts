import { axios } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error message");
    }
  }
);
