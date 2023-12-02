import * as S from './App.style.js'
import { useState } from "react";
import { GlobalStyle } from './App.style.js';
import { AppRoutes } from './routes.jsx';
import { Autorisation } from './components/Boolean/Autorisation.jsx';
export const App = () => {
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
			<AppRoutes user={user} />
		</S.Wrapper>
	);
}
