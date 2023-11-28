// import React from 'react'
import { useState } from 'react';
import * as S from './styles.js'
import { NavLink } from 'react-router-dom';
export function Nav() {

	const [visible, setVisible] = useState(false);

	const menuClick = () => setVisible(!visible);

	return (
		<S.MainNav>
			<S.NavLogo>
				<S.LogoImg src="./img/logo.png" alt="logo" />
			</S.NavLogo>
			<S.NavBurger onClick={menuClick}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>
			{visible && (
				<S.NavMenu>
					<S.MenuList>
						<S.MenuItem>
						<S.LinkElement to="/">Главная </S.LinkElement>
						</S.MenuItem>
						<S.MenuItem>
						<S.LinkElement to="/category">Мой плейлист </S.LinkElement>
						</S.MenuItem>
						<S.MenuItem>
							<S.MenuLink href="/">
								Выйти
							</S.MenuLink>
						</S.MenuItem>
					</S.MenuList>
				</S.NavMenu>
			)}
		</S.MainNav>
	)
}

