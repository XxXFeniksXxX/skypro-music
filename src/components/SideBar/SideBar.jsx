import { SkeletIcon } from '../SkeletAll/SkeletIcon'
import React, { useState, useEffect } from 'react'
import * as S from './styles.js'
import { NavLink } from "react-router-dom";
export const SideBar = () => {
	const [loading, setLoading] = useState(true)
	const Favorites = [
		{
		id: 1,
		src: "img/playlist01.png",
		alt: "day's playlist",
		},
		{
		id: 2,
		src: "img/playlist02.png",
		alt: "day's playlist",
		},
		{
		id: 3,
		src: "img/playlist03.png",
		alt: "day's playlist",
		},
	];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (loading) {
		return(
			<SkeletIcon />
		)
	}
	return (
		<S.MainSidebar className="sidebar">
			<S.SidebarPersonal>
				<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
				<S.SidebarIcon>
					<S.SidebarIconSvg alt="logout">
						<use xlinkHref="img/icon/sprite.svg#logout" />
					</S.SidebarIconSvg>
				</S.SidebarIcon>
			</S.SidebarPersonal>
			<S.SidebarBlock>
				<S.SidebarList>
				{Favorites.map((Favorit) => (
					<S.SidebarItem key={Favorit.id}>
						<NavLink to={`/FavoritesPage/${Favorit.id}`}>
							<S.SidebarImg 
								src={Favorit.src}
								alt={Favorit.alt}
							/>
						</NavLink>
					</S.SidebarItem>
				))}
				</S.SidebarList>
			</S.SidebarBlock>
		</S.MainSidebar>
	)
}