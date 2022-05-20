/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Favourites from "src/components/Favourites";
import Navbar from "src/components/Navbar";
import { setFavourites } from "src/store/favSlice";
import "src/App.css";

import Home from "./components/Home";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("favourites")) {
			dispatch(setFavourites());
		}
	}, []);

	return (
		<div className="w-full flex flex-col" style={{ minHeight: "100vh" }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="favourites" element={<Favourites />} />
			</Routes>

			<footer>
				<svg id="wave" viewBox="0 0 1440 180" version="1.1">
					<defs>
						<linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
							<stop stopColor="rgba(79, 70, 229, 1)" offset="0%"></stop>
							<stop stopColor="rgba(79, 70, 229, 1)" offset="100%"></stop>
						</linearGradient>
					</defs>
					<path
						fill="url(#sw-gradient-0)"
						d="M0,36L48,30C96,24,192,12,288,15C384,18,480,36,576,60C672,84,768,114,864,114C960,114,1056,84,1152,63C1248,42,1344,30,1440,42C1536,54,1632,90,1728,114C1824,138,1920,150,2016,132C2112,114,2208,66,2304,45C2400,24,2496,30,2592,39C2688,48,2784,60,2880,69C2976,78,3072,84,3168,96C3264,108,3360,126,3456,138C3552,150,3648,156,3744,132C3840,108,3936,54,4032,42C4128,30,4224,60,4320,72C4416,84,4512,78,4608,75C4704,72,4800,72,4896,60C4992,48,5088,24,5184,33C5280,42,5376,84,5472,102C5568,120,5664,114,5760,114C5856,114,5952,120,6048,102C6144,84,6240,42,6336,33C6432,24,6528,48,6624,57C6720,66,6816,60,6864,57L6912,54L6912,180L6864,180C6816,180,6720,180,6624,180C6528,180,6432,180,6336,180C6240,180,6144,180,6048,180C5952,180,5856,180,5760,180C5664,180,5568,180,5472,180C5376,180,5280,180,5184,180C5088,180,4992,180,4896,180C4800,180,4704,180,4608,180C4512,180,4416,180,4320,180C4224,180,4128,180,4032,180C3936,180,3840,180,3744,180C3648,180,3552,180,3456,180C3360,180,3264,180,3168,180C3072,180,2976,180,2880,180C2784,180,2688,180,2592,180C2496,180,2400,180,2304,180C2208,180,2112,180,2016,180C1920,180,1824,180,1728,180C1632,180,1536,180,1440,180C1344,180,1248,180,1152,180C1056,180,960,180,864,180C768,180,672,180,576,180C480,180,384,180,288,180C192,180,96,180,48,180L0,180Z"
					></path>
				</svg>
			</footer>
		</div>
	);
}

export default App;
