import { configureStore } from "@reduxjs/toolkit";
import GetForcast from "./Slice/GetForcast";

export const store = configureStore({
  reducer: {
		Forcast: GetForcast
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
