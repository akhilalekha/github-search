import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "src/store/repoSlice";

export const store = configureStore({
	reducer: {
		repos: repoSlice
	}
});
