import { Routes, Route } from "react-router-dom";
import { LogIn } from "./components/pages/logIn/login";
import { SignUp } from "./components/pages/signUp/register";
import { MainContent } from "./components/pages/main/main";
import { Error404 } from "./components/pages/error/404";
import { Category } from "./components/Category";
import { ProtectedRoute } from "./components/protected-route";
import { FavoritesPage } from "./components/pages/my collectios/favorites";

export const AppRoutes = ({ user, tracks, addtrackError, handleLogin, handleLogout}) => {

  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<LogIn handleLogin={handleLogin}/>} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainContent tracks={tracks} addtrackError={addtrackError} handleLogout={handleLogout}/>} />
        <Route path="//FavoritesPage/:id" element={<FavoritesPage />} />
        <Route path="/category" element={<Category />} />
      </Route>

      <Route path="*" element={<Error404 />} />

    </Routes>
  );
}