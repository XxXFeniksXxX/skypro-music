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
		const [user, setUser] = useState(null);
		const handleLogin = () => setUser({ login: "taradam" });
		const handleLogout = () => setUser(null);

	return (
		<S.Wrapper>
			<GlobalStyle />
			<Autorisation
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
			<AppRoutes tracks={tracks} addtrackError={addtrackError} user={user} />
		</S.Wrapper>
	);
}
