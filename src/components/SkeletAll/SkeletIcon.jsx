import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from '../SideBar/styles.js'

export function SkeletIcon() {
    return (
        <SkeletonTheme baseColor='#474747' highlightColor='#313131'>
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
                            <Skeleton width={250} height={150} />
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="index.html">
                            <Skeleton width={250} height={150} />
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="index.html">
                            <Skeleton width={250} height={150} />
                        </a>
                    </div>
                </S.SidebarList>
            </S.SidebarBlock>
        </S.MainSidebar>
        </SkeletonTheme>
    )
}