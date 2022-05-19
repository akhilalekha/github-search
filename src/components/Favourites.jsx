import { useSelector } from "react-redux";
import RepoItem from "src/components/RepoItem";

export default function Favourites() {
	const favourites = useSelector((state) => state.favourites);

	return (
		<div className="flex flex-wrap px-40 mt-12">
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
