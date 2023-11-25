import * as S from './styles.js'
import { NavLink } from 'react-router-dom';
import cn from "classnames";
export const LogIn = () => {
  const activeClassName = "color:green";
  const style = {
    color: '#ffffff',
  }
  return (
    <S.Content>
      <S.Title>Страница логина</S.Title>
      <S.Button><NavLink to="/" >Вход</NavLink></S.Button>
        <NavLink to="/register"  style={style}>
          Перейти к регистрации 
        </NavLink>
    </S.Content>
  );
}