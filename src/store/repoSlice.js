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
		},
		toggleFav: (state, action) => {
			// console.log(action.payload);
			const fullNames = state.data.map((s) => s.full_name);
			const index = fullNames.indexOf(action.payload.full_name);
			// console.log(index);

			state.data[index]["isFav"] = !state.data[index]["isFav"];
		}
	}
});

export const { setRepos, toggleFav } = repoSlice.actions;
export default repoSlice.reducer;
