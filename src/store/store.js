import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "src/store/repoSlice";
import favSlice from "src/store/favSlice";

export const store = configureStore({
	reducer: {
		repos: repoSlice,
		favourites: favSlice
	}
});
