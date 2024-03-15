import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./components/Loader/Loader";

const LazyCusomLayout = lazy(()=>import('./components/Layout/Layout'))

const LazyHomePage = lazy(()=>import('./pages/HomePage/HomePage'))
const LazyAlbumsPage = lazy(()=>import('./pages/AlbumsPage/AlbumsPage'))
const LazyPostsPage = lazy(()=>import('./pages/PostsPage/PostsPage'))
const LazyTodoPage = lazy(()=>import('./pages/TodoPage/TodoPage'))
const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader/>}>
			<Routes>
				<Route path="/" element={<LazyCusomLayout />}>
					<Route index path="" element={<LazyHomePage />} />
					<Route path="posts" element={<LazyPostsPage />} />
					<Route path="albums" element={<LazyAlbumsPage />} />
					<Route path="todos" element={<LazyTodoPage />} />
				</Route>
			</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
