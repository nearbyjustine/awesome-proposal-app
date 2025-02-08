import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "./pages/Hero.tsx";
import Form from "./pages/Form.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/form" element={<Form />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
