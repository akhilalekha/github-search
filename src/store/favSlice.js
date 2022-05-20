import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
	name: "favourites",
	initialState: {
		data: [],
		loaded: false,
		loading: false
	},
	reducers: {
		// to get from local storage or file import
		setFavourites: (state) => {
			if (localStorage.getItem("favourites")) {
				let localData = JSON.parse(localStorage.getItem("favourites"));
				const newData = {
					...state,
					data: [...localData]
				};
				return (state = {
					...newData
				});
			}
		},
		addFavourites: (state, action) => {
			const favNames = state.data?.map((s) => s.full_name);
			if (!favNames.includes(action.payload.full_name)) {
				state.data.push(action.payload);
				localStorage.setItem("favourites", JSON.stringify(state.data));
			}
		},
		removeFavourites: (state, action) => {
			const newFavItems = state.data?.filter(
				(s) => s.full_name !== action.payload.full_name
			);
			const newData = {
				...state,
				data: [...newFavItems]
			};

			localStorage.setItem("favourites", JSON.stringify(newFavItems));
			return (state = {
				...newData
			});
		}
	}
});

export const { setFavourites, addFavourites, removeFavourites } =
	favSlice.actions;
export default favSlice.reducer;
