/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { setRepos } from "src/store/repoSlice";
import { useDispatch } from "react-redux";

export default function Search() {
	const [query, setQuery] = useState("");

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	async function searchRepos() {
		console.log(query, "final query");
		if (process.env.NODE_ENV === "development") {
			dispatch(
				setRepos({
					data: [],
					loaded: false,
					loading: true
				})
			);
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

			const data = res.data.items.map((i) => {
				return {
					full_name: i.full_name,
					url: i.html_url
				};
			});

			dispatch(
				setRepos({
					data: data,
					loaded: true,
					loading: false
				})
			);
		} else {
			const res = await axios.get(
				"https://api.github.com/search/repositories",
				{
					params: {
						q: query
					}
				}
			);
			console.log(res);
		}
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (query) {
				searchRepos();
			} else {
				dispatch(
					setRepos({
						data: [],
						loaded: false,
						loading: false
					})
				);
			}
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, [query]);

	return (
		<div className="w-full flex justify-center items-center flex-col">
			<input
				type="text"
				placeholder="Search repos..."
				className="p-2 my-6 w-1/2 border-4 border-gray-300 rounded-md outline-none focus:border-indigo-400 text-gray-400 font-semibold text-lg"
				value={query}
				onChange={handleChange}
			/>
		</div>
	);
}
