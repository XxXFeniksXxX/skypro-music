import * as S from './styles.js'
import React, { useState, useEffect } from 'react'

export const LogIn = ({handleLogin}) => {
  const [loginError, setLoginError] = useState(null)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPage = async () => {
    try {
      if (!email) {
        setLoginError('Введите email')
        return
      }

      if (!password) {
        setLoginError('Введите пароль')
      }

      await loginUser({ email, password })({
        email: email,
        password: password,
        userName: email,
            }) 
          }catch (error) {
      setLoginError(error.message)
    }
  }

  useEffect(() => {
    setLoginError(null)
  }, [email, password])

  return (
    <S.Page>
      <S.Frame className='sfd'>
        <S.FrameContent className='sfd'>
          <S.Title><img src="../../img/logo_modal.png" alt="logo"></img></S.Title>
          <S.SearchTextMail
            type="search"
            placeholder="Почта"
            name="search"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.SearchTextPassword
            type="search"
            placeholder="Пароль"
            name="search"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          {loginError ? <S.Error>{loginError}</S.Error> :
          <S.LinkElementButton  onClick={handleLogin} to="/">Войти</S.LinkElementButton>}
          <S.LinkElement to="/register">
            Перейти к регистрации
          </S.LinkElement>
        </S.FrameContent>
      </S.Frame>
    </S.Page>
  );
}