import { SkeletIcon } from '../SkeletAll/SkeletIcon'
import React, { useState, useEffect } from 'react'
import * as S from './styles.js'

export function SideBar() {
	const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
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
					<div className="sidebar__item">
						<a className="sidebar__link" href="index.html">
							<img
								className="sidebar__img"
								src="img/playlist01.png"
								alt="day's playlist"
							/>
						</a>
					</div>
					<div className="sidebar__item">
						<a className="sidebar__link" href="index.html">
							<img
								className="sidebar__img"
								src="img/playlist02.png"
								alt="day's playlist"
							/>
						</a>
					</div>
					<div className="sidebar__item">
						<a className="sidebar__link" href="index.html">
							<img
								className="sidebar__img"
								src="img/playlist03.png"
								alt="day's playlist"
							/>
						</a>
					</div>
				</S.SidebarList>
			</S.SidebarBlock>
		</S.MainSidebar>
	)
}
