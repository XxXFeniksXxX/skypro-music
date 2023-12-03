import * as S from './styles.js'

export const LogIn = () => {
  return (
    <S.Page>
      <S.Frame className='sfd'>
        <S.FrameContent className='sfd'>
          <S.Title><img src="../../img/logo_modal.png" alt="logo"></img></S.Title>
          <S.SearchTextMail
            type="search"
            placeholder="Почта"
            name="search"
          />
          <S.SearchTextPassword
            type="search"
            placeholder="Пароль"
            name="search"
          />
          <S.LinkElementButton to="/" >Войти</S.LinkElementButton>
          <S.LinkElement to="/register">
            Перейти к регистрации
          </S.LinkElement>
        </S.FrameContent>
      </S.Frame>
    </S.Page>
  );
}