import * as S from './styles.js'

export const SignUp = () => {
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

          <S.SearchTextPassword
            type="search"
            placeholder="Повторите пароль"
            name="search"
          />
          <S.LinkElementButton to="/login" >Зарегистрироваться</S.LinkElementButton>
        </S.FrameContent>
      </S.Frame>
    </S.Page>
  );
  }
