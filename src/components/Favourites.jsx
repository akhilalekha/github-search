import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "src/store/favSlice";
import RepoItem from "src/components/RepoItem";

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
		<div className="flex flex-wrap px-40 mt-7">
			<div className="flex w-full justify-end py-4 text-sm">
				<a
					href={`data:text/json;charset=utf-8, ${encodeURIComponent(
						JSON.stringify(favourites.data)
					)}`}
					className="bg-indigo-600 text-white font-semibold rounded-md px-2 py-1 mr-5"
					download="favourites.json"
				>
					Export Data
				</a>
				<form onSubmit={(e) => handleFile(e)}>
					<input
						type="file"
						id="file"
						accept=".json"
						className=""
						name="file"
					/>
					<button className="bg-indigo-600 text-white font-semibold rounded-md px-2 py-1">
						Import Data
					</button>
				</form>
			</div>

			{favourites.data?.length > 0 ? (
				favourites.data.map((i) => (
					<RepoItem item={i} key={i.url} type="remove" />
				))
			) : (
				<div className="w-full text-center text-sm text-gray-600">
					No repos found
				</div>
			)}
		</div>
	);
}
