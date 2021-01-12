import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "./components/homePage/HomePage";
import { Diluter } from "./components/diluter/Diluter";

export const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/dilute' component={Diluter} />
			</Switch>
		</BrowserRouter>
	);
};
