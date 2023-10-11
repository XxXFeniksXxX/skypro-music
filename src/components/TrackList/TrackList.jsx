import Searchblock from '../Searchblock/Searchblock'
import './styles.css'
import React, { useState, useEffect } from 'react'
import Skelet from '../SkeletAll/SkeletTrack'
import { FiltrExecutor, FiltrYear, FilterGenre } from '../Filtr/Filtr'

function TrackList() {
	const [loading, setLoading] = useState(true)
	const [visibleExecutor, setVisibleExecutor] = useState(false);
	const [visibleYear, setVisibleYear] = useState(false);
	const [visibleGenre, setVisibleGenre] = useState(false);
	const menuExecutorClick = () => {
		setVisibleGenre(false);
		setVisibleYear(false);
		setVisibleExecutor(!visibleExecutor);
	}
	const menyYearClick = () => {
		const el = document.getElementById('Year');
		if (el.classList == 'active') {
			setVisibleGenre(false);
			setVisibleExecutor(false);
			el.classList.remove('active');
		} else {
			el.classList.add('active');
			setVisibleYear(!visibleYear);
		}
	}
	const menyGenreClick = () => {
		setVisibleExecutor(false);
		setVisibleYear(false);
		setVisibleGenre(!visibleGenre);
	}
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 5000)
	}, [])

	if (loading) {
		return (
			<Skelet />
		)
	}

	return (
		<div className="main__centerblock centerblock">
			<Searchblock />
			<h2 className="centerblock__h2">Треки</h2>
			<div className="centerblock__filter filter">
				<div className="filter__title">Искать по:</div>
				<div className="filter__button button-author _btn-text" onClick={menuExecutorClick}>
					исполнителю
				</div>
				<div className="filter__button button-year _btn-text" id='Year' onClick={menyYearClick}>году выпуска</div>
				<div className="filter__button button-genre _btn-text" onClick={menyGenreClick}>жанру</div>
			</div>
			{visibleExecutor && <div>
				<FiltrExecutor />
			</div>
			}
			{visibleYear && <div>
				<FiltrYear />
			</div>
			}
			{visibleGenre && <div>
				<FilterGenre />
			</div>
			}
			<div className="centerblock__content">
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
								<svg className="track__title-svg" alt="music">
									<use xlinkHref="img/icon/sprite.svg#icon-note" />
								</svg>
							</div>
							<div className="track__title-text">
								<a className="track__title-link" href="http://">
									Guilt <span className="track__title-span" />
								</a>
							</div>
						</div>
						<div className="track__author">
							<a className="track__author-link" href="http://">
								Nero
							</a>
						</div>
						<div className="track__album">
							<a className="track__album-link" href="http://">
								Welcome Reality
							</a>
						</div>
						<div className="track__time">
							<svg className="track__time-svg" alt="time">
								<use xlinkHref="img/icon/sprite.svg#icon-like" />
							</svg>
							<span className="track__time-text">4:44</span>
						</div>
					</div>
				</div>
				<div className="content__playlist playlist">
					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Elektro <span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									Dynoro, Outwork, Mr. Gee
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Elektro
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">2:22</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										I’m Fire <span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									Ali Bakgor
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									I’m Fire
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">2:22</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Non Stop
										<span className="track__title-span">(Remix)</span>
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									Стоункат, Psychopath
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Non Stop
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">4:12</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Run Run
										<span className="track__title-span">(feat. AR/CO)</span>
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									Jaded, Will Clarke, AR/CO
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Run Run
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">2:54</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Eyes on Fire
										<span className="track__title-span">(Zeds Dead Remix)</span>
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									Blue Foundation, Zeds Dead
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Eyes on Fire
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">5:20</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Mucho Bien
										<span className="track__title-span">
											(Hi Profile Remix)
										</span>
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									HYBIT, Mr. Black, Offer Nissim, Hi Profile
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Mucho Bien
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">3:41</span>
							</div>
						</div>
					</div>

					<div className="playlist__item">
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href="http://">
										Knives n Cherries
										<span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http://">
									minthaze
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http://">
									Captivating
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">1:48</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TrackList
