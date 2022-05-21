import React from "react";
import { useSelector } from "react-redux";
import RepoItem from "src/components/RepoItem";
import loadingIcon from "src/assets/Pulse.svg";

export default function RepoList() {
	const repos = useSelector((state) => state.repos);

	return (
		<div className="flex flex-wrap px-40 justify-between">
			{repos.data.length > 0 && repos.loaded
				? repos.data.map((repo) => (
						<RepoItem item={repo} key={repo.url} type="toggle" />
				  ))
				: repos.loaded && (
						<div className="w-full text-center text-sm text-gray-600">
							No repos found
						</div>
				  )}
			{repos.loading && (
				<div className="flex justify-center items-center w-full">
					<img src={loadingIcon} alt="loading icon" width={95} height={95} />
				</div>
			)}
		</div>
	);
}
