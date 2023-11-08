// import React from 'react'
import { useState } from 'react';
import * as S from './styles.js'

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
							<S.MenuLink href="index.html">
								Главное
							</S.MenuLink>
						</S.MenuItem>
						<S.MenuItem>
							<S.MenuLink href="index.html">
								Мой плейлист
							</S.MenuLink>
						</S.MenuItem>
						<S.MenuItem>
							<S.MenuLink href="../signin.html">
								Войти
							</S.MenuLink>
						</S.MenuItem>
					</S.MenuList>
				</S.NavMenu>
			)}
		</S.MainNav>
	)
}

