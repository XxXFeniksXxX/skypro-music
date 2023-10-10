import '../SideBar/styles.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletIcon() {
    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout" />
                    </svg>
                </div>
            </div>
            <div className="sidebar__block">
                <div className="sidebar__list">
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
                </div>
            </div>
        </div>
    )
}
export default SkeletIcon