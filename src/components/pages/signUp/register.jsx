import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
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
            onChange={(event) => {
            }}
          />
          
          <S.SearchTextPassword
            type="search"
            placeholder="Пароль"
            name="search"
            onChange={(event) => {
            }}
          />

          <S.SearchTextPassword
            type="search"
            placeholder="Повторите пароль"
            name="search"
            onChange={(event) => {
            }}
          />
          <S.LinkElementButton >Зарегистрироваться</S.LinkElementButton>
        </S.FrameContent>
      </S.Frame>
    </S.Page>
  );
  }
