import '../TrackList/styles.css'
import Searchblock from '../Searchblock/Searchblock'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Skelet() {
	return (
		// _____________________________Треки_______________________________  
		<div className="main__centerblock centerblock">
			<Searchblock />
			<h2 className="centerblock__h2">Треки</h2>
			<div className="centerblock__filter filter">
				<div className="filter__title">Искать по:</div>
				<div className="filter__button button-author _btn-text">
					исполнителю
				</div>
				<div className="filter__button button-year _btn-text">году выпуска</div>
				<div className="filter__button button-genre _btn-text">жанру</div>
			</div>
			<div className="centerblock__content">
			<SkeletonTheme baseColor='#474747' highlightColor='#313131'>
				<div className="content__title playlist-title">
					<div className="playlist-title__col col01">Трек</div>
					<div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
					<div className="playlist-title__col col03">АЛЬБОМ</div>
					<div className="playlist-title__col col04">
						<svg className="playlist-title__svg" alt="time">
							<use xlinkHref="./img/icon/sprite.svg#icon-watch" />
						</svg>
					</div>
				</div>
				<div className="playlist__item">
					<div className="playlist__track track">
						<div className="track__title">
							<div className="track__title-image">
								<Skeleton width={50} height={50} />
							</div>
							<div className="track__title-text">
								<a className="track__title-link" href="http://">
									<Skeleton width={330} height={20} />
								</a>
							</div>
						</div>
						<div className="track__author">
							<a className="track__author-link" href="http://">
								<Skeleton width={280} height={20} />
							</a>
						</div>
						<div className="track__album">
							<a className="track__album-link" href="http://">
								<Skeleton width={290} height={20} />
							</a>
						</div>
						<div className="track__time">
							<svg className="track__time-svg" alt="time">
								<use xlinkHref="img/icon/sprite.svg#icon-like" />
							</svg>
						</div>
					</div>
				</div>
				<div className="content__playlist playlist">
					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} /> <span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} /> <span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<Skeleton width={50} height={50} />
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										<Skeleton width={330} height={20} />
										<span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									<Skeleton width={280} height={20} />
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									<Skeleton width={290} height={20} />
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				</SkeletonTheme>
			</div>
		</div>
	)
}
export default Skelet
