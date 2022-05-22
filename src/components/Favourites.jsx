import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "src/store/favSlice";
import RepoItem from "src/components/RepoItem";
import FavSearch from "src/components/FavSearch";
import loadingIcon from "src/assets/Pulse.svg";

export default function Favourites() {
	const favourites = useSelector((state) => state.favourites);

	const dispatch = useDispatch();

	const handleFile = (e) => {
		e.preventDefault();
		const fileObj = e.target.file.files[0];
		const reader = new FileReader();
		reader.readAsText(fileObj);

		reader.onload = (e) => {
			let obj = JSON.parse(e.target.result);
			localStorage.setItem("favourites", JSON.stringify(obj));
			dispatch(setFavourites());
		};
	};

	return (
		<div className="flex flex-wrap lg:px-40 px-4 mt-7 lg:justify-start justify-center">
			<div className="flex w-full justify-end py-4 text-sm flex-wrap items-center">
				<FavSearch favourites={favourites.data} />
				<a
					href={`data:text/json;charset=utf-8, ${encodeURIComponent(
						JSON.stringify(favourites.data)
					)}`}
					className="bg-indigo-600 text-white font-semibold rounded-md px-2 py-1 lg:mr-5 h-8 lg:my-0 my-2"
					download="favourites.json"
				>
					Export Data
				</a>
				<form onSubmit={(e) => handleFile(e)} className="h-8 flex">
					<input
						type="file"
						id="file"
						accept=".json"
						className="h-7"
						name="file"
					/>
					<button className="bg-indigo-600 text-white font-semibold rounded-md px-2 py-1 h-8">
						Import Data
					</button>
				</form>
			</div>

			{favourites.searchLoaded ? (
				favourites.searchResults.length > 0 ? (
					favourites.searchResults.map((i) => (
						<RepoItem item={i} key={i.url} type="remove" />
					))
				) : (
					<div className="w-full text-center text-sm text-gray-600">
						No repos found
					</div>
				)
			) : favourites.data.length > 0 ? (
				favourites.data.map((i) => (
					<RepoItem item={i} key={i.url} type="remove" />
				))
			) : (
				<div className="w-full text-center text-sm text-gray-600">
					No repos found
				</div>
			)}

			{favourites.searchLoading && (
				<div className="flex justify-center items-center w-full">
					<img src={loadingIcon} alt="loading icon" width={95} height={95} />
				</div>
			)}
		</div>
	);
}
