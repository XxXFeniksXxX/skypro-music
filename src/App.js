import * as S from './App.style.js'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './App.style.js';
import { AppRoutes } from './routes.jsx';
import { Autorisation } from './components/Boolean/Autorisation.jsx';
import { getTracks } from './Api.js';
export const App = () => {
	const [tracks, setTracks] = useState([]);
	const [addtrackError, setAddtrackError] = useState(null);
	useEffect(() => {
		getTracks().then((tracks) => {
			setTracks(tracks);
			console.log(tracks);
		}).catch((error) => {
			setAddtrackError(("Ошибка сервера, попробуйте позже: ") + error.message);
		 })
	}, []);
		const [user, setUser] = useState(localStorage.getItem("user"));
		const handleLogin = () => {
			localStorage.setItem("user", "Egor")
		setUser(localStorage.getItem("user"));
		console.log(user);
	}

		const handleLogout = () => {
			localStorage.removeItem("user")
		setUser(false);
		console.log(user);
	}

	return (
		<S.Wrapper>
			<GlobalStyle />
			<AppRoutes handleLogin={handleLogin} handleLogout={handleLogout} tracks={tracks} addtrackError={addtrackError} user={user} />
		</S.Wrapper>
	);
}
