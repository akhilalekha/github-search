/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "src/store/repoSlice";

export default function Search() {
	const [query, setQuery] = useState("");

	const dispatch = useDispatch();
	const favourites = useSelector((state) => state.favourites);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	async function searchRepos() {
		// console.log(query, "final query");
		dispatch(
			setRepos({
				data: [],
				loaded: false,
				loading: true
			})
		);

		const res = await getRepos();

		const favNames = favourites.data.map((i) => i.full_name);

		const data = res.map((i) => {
			return {
				full_name: i.full_name,
				url: i.html_url,
				isFav: favNames.includes(i.full_name)
			};
		});

		dispatch(
			setRepos({
				data: data,
				loaded: true,
				loading: false
			})
		);
	}

	const getRepos = async () => {
		if (process.env.NODE_ENV === "development") {
			const res = await axios.get(
				"https://api.github.com/search/repositories",
				{
					auth: {
						username: `${process.env.REACT_APP_CLIENT_ID}`,
						password: `${process.env.REACT_APP_CLIENT_SECRET}`
					},
					params: {
						q: query,
						per_page: 18
					}
				}
			);
			return res.data.items;
		} else {
			const res = await axios.get(
				"https://api.github.com/search/repositories",
				{
					params: {
						q: query,
						per_page: 18
					}
				}
			);
			return res.data.items;
		}
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (query) {
				searchRepos();
			}
		}, 2000);
		return () => clearTimeout(timeoutId);
	}, [query]);

	return (
		<div className="w-full flex justify-center items-center flex-col">
			<input
				type="text"
				placeholder="Search repos..."
				className="p-2 my-6 w-1/2 border-4 border-gray-300 rounded-md outline-none focus:border-indigo-400 text-gray-400 font-semibold text-lg focus:text-indigo-400"
				value={query}
				onChange={handleChange}
				data-testid="search-input"
			/>
		</div>
	);
}
