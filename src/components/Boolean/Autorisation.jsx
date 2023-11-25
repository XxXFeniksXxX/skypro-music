import * as S from './styles.js'
import { Link } from 'react-router-dom';

export const Autorisation = ({user, onAuthButtonClick}) => {
    return (
      <S.Content>
        <S.Title>ФейкАвторизация</S.Title>
        <button onClick={onAuthButtonClick}>
        {user ? "Sign out" : "Sign in"}
       </button>
      </S.Content>
    );
  }