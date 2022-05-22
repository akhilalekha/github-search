/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults } from "src/store/favSlice";

export default function FavSearch({ favourites }) {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const searchFav = () => {
		const searchResults = favourites.filter(function (el) {
			return el.full_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		// console.log({ searchResults });
		dispatch(
			setSearchResults({
				searchResults: searchResults,
				searchLoaded: true,
				searchLoading: false
			})
		);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (query) {
				dispatch(
					setSearchResults({
						searchLoading: true
					})
				);
				searchFav();
			} else {
				dispatch(
					setSearchResults({
						searchResults: [],
						searchLoaded: false,
						searchLoading: false
					})
				);
			}
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, [query]);

	return (
		<div
			className="flex justify-center items-center flex-col  lg:w-1/2 w-full"
			style={{ marginRight: "auto" }}
		>
			<input
				type="text"
				placeholder="Search favourites..."
				className="px-2 border-4 border-gray-300 rounded-md outline-none focus:border-indigo-400 text-gray-400 font-semibold text-base focus:text-indigo-400 w-full h-10"
				value={query}
				onChange={handleChange}
				data-testid="search-input"
			/>
		</div>
	);
}
