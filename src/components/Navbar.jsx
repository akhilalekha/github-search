import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="text-white text-lg bg-indigo-600 py-3 font-medium flex justify-between px-40">
			<Link to="/" className="text-2xl">
				GitHub Search
			</Link>
			<Link to="/favourites" className="pl-5">
				Favourites
			</Link>
		</nav>
	);
}
