// import React from 'react'
import { useState } from 'react';
import './styles.css'

function Nav() {

	const [visible, setVisible] = useState(false);
	
	const menuClick = () => setVisible(!visible);

		return (
			<nav className="main__nav nav">
				<div className="nav__logo logo">
					<img className="logo__image" src="./img/logo.png" alt="logo" />
				</div>
				<div className="nav__burger burger" onClick={menuClick}>
					<span className="burger__line" />
					<span className="burger__line" />
					<span className="burger__line" />
				</div>
				{visible && (
				<div className="nav__menu menu">
					<ul className="menu__list">
						<li className="menu__item">
							<a href="index.html" className="menu__link">
								Главное
							</a>
						</li>
						<li className="menu__item">
							<a href="index.html" className="menu__link">
								Мой плейлист
							</a>
						</li>
						<li className="menu__item">
							<a href="../signin.html" className="menu__link">
								Войти
							</a>
						</li>
					</ul>
				</div>
				)}
			</nav>
		)
	}



export default Nav
