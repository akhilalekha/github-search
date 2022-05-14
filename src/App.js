import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="w-full">
			<Navbar />
			<Routes>
				<Route path="favourites" element={<Favourites />} />
			</Routes>
		</div>
	);
}

export default App;
