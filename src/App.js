import * as S from './App.style.js'
import { useEffect, useState } from "react";
import { GlobalStyle } from './App.style.js';
import { AppRoutes } from './routes.jsx';
import { Autorisation } from './components/Boolean/Autorisation.jsx';
import { getTodos } from './Api.js';
export const App = () => {
		const [user, setUser] = useState(null);
	  
		const handleLogin = () => setUser({ login: "taradam" });
	  
		const handleLogout = () => setUser(null);

		const [todos, setTodos] = useState([]);
		const [addTodoError, setAddTodoError] = useState(null);
		try{
	useEffect(() => {
		getTodos().then((todos) => {

			setTodos(todos.todos);
			console.log(todos);
		});
	}, []);
} catch (error){
	setAddTodoError(error.message);
}
	return (
		<S.Wrapper>
			<GlobalStyle />
			<Autorisation
          user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}
        />
			<AppRoutes user={user} todos={todos} addTodoError = {addTodoError}/>
		</S.Wrapper>
	);
}
