import * as S from './App.style.js'
import { useEffect, useState } from "react";
import { GlobalStyle } from './App.style.js';
import { AppRoutes } from './routes.jsx';
import { Autorisation } from './components/Boolean/Autorisation.jsx';
import { getTracks } from './Api.js';
export const App = () => {
		const [user, setUser] = useState(null);
	  
		const handleLogin = () => setUser({ login: "taradam" });
	  
		const handleLogout = () => setUser(null);

		const [tracks, setTracks] = useState([]);
		const [addtrackError, setAddtrackError] = useState(null);
		try{
	useEffect(() => {
		getTracks().then((tracks) => {
			setTracks(tracks.track);
			console.log(tracks);
		});
	}, []);
} catch (error){
	setAddtrackError(error.message);
}
	return (
		<S.Wrapper>
			<GlobalStyle />
			<Autorisation
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
			<AppRoutes user={user} tracks={tracks} addtrackError = {addtrackError}/>
		</S.Wrapper>
	);
}
