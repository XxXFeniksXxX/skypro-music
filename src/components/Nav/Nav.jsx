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
						<NavLink to="/">Главная </NavLink>
						</S.MenuItem>
						<S.MenuItem>
						<NavLink to="/category">Мой плейлист </NavLink>
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

