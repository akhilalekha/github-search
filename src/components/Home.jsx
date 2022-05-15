import React from "react";
import Search from "src/components/Search";
import RepoList from "src/components/RepoList";

export default function Home() {
	return (
		<div>
			<Search />
			<RepoList />
		</div>
	);
}
