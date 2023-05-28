import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IParams {
  lat: number;
  lon: number;
}

export const fetchFocast = createAsyncThunk(
  "forcast/FetchForcast",
  async (params: IParams) => {
    const { lat, lon } = params;
    const { data } = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`
    );
    return data.hourly;
  }
);

type TypeState = {
  temperature_2m: number[];
  status: string;
};

const initialState: TypeState = {
  temperature_2m: [],
  status: "loading", // loading || success || error
};

const GetForcastSlice = createSlice({
  name: "GetForcast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFocast.pending, (state) => {
      state.status = "loading";
      state.temperature_2m = [];
    });
    builder.addCase(
      fetchFocast.fulfilled,
      (state, action: PayloadAction<TypeState>) => {
        state.status = "loading";
        state.temperature_2m = action.payload.temperature_2m;
      }
    );
    builder.addCase(fetchFocast.rejected, (state) => {
      state.status = "error";
      state.temperature_2m = [];
    });
  },
});

export default GetForcastSlice.reducer;
