import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import TodoPage from '../Pages/TodoPage/TodoPage';
import SearchPokemon from '../Pages/SearchPokemon/SearchPokemon';
import Page404 from '../Pages/Page404/Page404';

const Routers = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/todo" element={<TodoPage />} />
					<Route path="/pokedex" element={<SearchPokemon />} />
					<Route path="*" element="tuki" />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Routers;
