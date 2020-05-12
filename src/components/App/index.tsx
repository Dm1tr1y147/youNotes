import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import TopBar from '../TopBar'
import Navbar from '../Navbar'
import Router from '../../utils/router'

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<TopBar />
			<Router />
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
