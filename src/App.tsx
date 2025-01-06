import Header from "@/components/ui/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ArticleListPage from "@/page/ArticleListPage.tsx";

function App() {

	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<ArticleListPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
