import { registerUser } from '../../../Api.js';
import * as S from './styles.js'
import React, { useState, useEffect } from 'react'


export const SignUp = () => {
  const [regError, setRegError] = useState(null)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const RegisterToPage = async () => {
    try{
    if (!email) {
      setRegError('Введите email')
      return
    }

    if (!password) {
      setRegError('Введите пароль')
      return
    }

    if (!passwordRepeat) {
      setRegError('Подтвердите пароль')
      return
    }

    if (password !== passwordRepeat) {
      setRegError('Пароли не совпадают')
      return
    }

    registerUser({ email, password })({
      email: email,
      password: password,
    })
  }catch (error) {
    setRegError(error.message)
  }
}
  useEffect(() => {
    setRegError(null)
  }, [email, password, passwordRepeat])

  return (
    <S.Page>
      <S.Frame className='sfd'>
        <S.FrameContent className='sfd'>
          <S.Title><img src="../../img/logo_modal.png" alt="logo"></img></S.Title>
          <S.SearchTextMail
            value={email}
            type="search"
            placeholder="Почта"
            name="search"
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />

          <S.SearchTextPassword
            value={password}
            type="search"
            placeholder="Пароль"
            name="search"
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />

          <S.SearchTextPassword
            value={passwordRepeat}
            type="search"
            placeholder="Повторите пароль"
            name="search"
            onChange={(event) => {
              setPasswordRepeat(event.target.value)
            }}
          />
          {regError ? <S.Error>{regError}</S.Error> :
          <S.LinkElementButton  onClick={RegisterToPage} >Зарегистрироваться</S.LinkElementButton>
          }
        </S.FrameContent>
      </S.Frame>
    </S.Page>
  );
}
