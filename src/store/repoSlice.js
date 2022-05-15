import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
	name: "repos",
	initialState: {
		data: [],
		loaded: false,
		loading: false
	},
	reducers: {
		setRepos: (state, action) => {
			const newData = {
				...action.payload
			};
			return (state = {
				...newData
			});
		}
	}
});

export const { setRepos } = repoSlice.actions;
export default repoSlice.reducer;
