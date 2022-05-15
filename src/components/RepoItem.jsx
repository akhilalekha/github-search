import React from "react";

export default function RepoItem({ item }) {
	return (
		<a href={item.url} target="_blank" rel="noopener noreferrer">
			<div
				className="m-2 p-2 py-2 border border-indigo-400 rounded-md w-36 h-20 text-ellipsis overflow-hidden shadow-lg text-indigo-400 text-sm font-medium"
				key={item.url}
			>
				{item.full_name}
			</div>
		</a>
	);
}
