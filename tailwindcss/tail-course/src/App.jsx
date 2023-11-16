import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="text-3xl italic"> Title 1 </h1>
			<h2 className="text-2xl underline decoration-red-500 decoration-wavy">
				Title 2
			</h2>
			<h3 className="text-xl"> Title 3 </h3>
			<p className="text-base">A regular paragrah</p>
			<p className="text-sm">A description paragraph</p>
			<p className="text-xs">A little note</p>
		</>
	);
}

export default App;
