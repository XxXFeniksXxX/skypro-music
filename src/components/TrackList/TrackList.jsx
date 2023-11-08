import { Searchblock } from '../Searchblock/Searchblock';
import * as S from './styles.js';
import './styles.css';
import React, { useState, useEffect } from 'react'
import { Skelet } from '../SkeletAll/SkeletTrack'
import { FiltrExecutor, FiltrYear, FilterGenre } from '../Filtr/Filtr'

export function TrackList() {
	const [loading, setLoading] = useState(true)
	const [visibleExecutor, setVisibleExecutor] = useState(false);
	const [visibleYear, setVisibleYear] = useState(false);
	const [visibleGenre, setVisibleGenre] = useState(false);
	const [isActiveExecutor, setActiveExecutor] = useState(false);
	const [isActiveYear, setActiveYear] = useState(false);
	const [isActiveGenre, setActiveGenre] = useState(false);
	const menuExecutorClick = () => {
		setVisibleGenre(false);
		setVisibleYear(false);
		setVisibleExecutor(!visibleExecutor);

		setActiveExecutor(!isActiveExecutor);
		setActiveYear(false);
		setActiveGenre(false);
	}
	const menyYearClick = () => {
		setVisibleGenre(false);
		setVisibleExecutor(false);
		setVisibleYear(!visibleYear);

		setActiveYear(!isActiveYear);
		setActiveExecutor(false);
		setActiveGenre(false);
	}
	const menyGenreClick = () => {
		setVisibleExecutor(false);
		setVisibleYear(false);
		setVisibleGenre(!visibleGenre);

		setActiveGenre(!isActiveGenre);
		setActiveYear(false);
		setActiveExecutor(false);

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
		<S.MainCenterblock className="centerblock">
			<Searchblock />
			<S.CenterblockH2>Треки</S.CenterblockH2>
			<S.CenterblockFilter className="filter">
				<S.FilterTitle>Искать по:</S.FilterTitle>
				<div>
					<S.FilterButton className={`button-author _btn-text ${isActiveExecutor ? "active" : ""}`} onClick={menuExecutorClick}>
						исполнителю
					</S.FilterButton>
					{visibleExecutor && <div>
						<FiltrExecutor />
					</div>
					}
				</div>
				<div>
					<S.FilterButton className={`button-year _btn-text ${isActiveYear ? "active" : ""}`} id='Year' onClick={menyYearClick}>году выпуска
					</S.FilterButton>
					{visibleYear && <div>
						<FiltrYear />
					</div>
					}
				</div>
				<div>
					<S.FilterButton className={`button-genre _btn-text ${isActiveGenre ? "active" : ""}`} onClick={menyGenreClick}> жанру
					</S.FilterButton>
					{visibleGenre && <div>
						<FilterGenre />
					</div>
					}
				</div>
			</S.CenterblockFilter>


			<S.CenterblockContent>
				<S.ContentTitle className="playlist-title">
					<S.PlaylistTitleCol01 className="col01">Трек</S.PlaylistTitleCol01>
					<S.PlaylistTitleCol02 className="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
					<S.PlaylistTitleCol03 className="col03">АЛЬБОМ</S.PlaylistTitleCol03>
					<S.PlaylistTitleCol04 className="col04">
						<S.PlaylistTitleSvg alt="time">
							<use xlinkHref="./img/icon/sprite.svg#icon-watch" />
						</S.PlaylistTitleSvg>
					</S.PlaylistTitleCol04>
				</S.ContentTitle>
				<S.PlaylistItem>
					<S.PlaylistTrack className="track">
						<S.TrackTitle>
							<S.TrackTitleImage>
								<S.TrackTitleSvg alt="music">
									<use xlinkHref="img/icon/sprite.svg#icon-note" />
								</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<S.TrackTitleText>
								<S.TrackTitleLink href="http://">
									Guilt <S.TrackTitle/>
								</S.TrackTitleLink>
							</S.TrackTitleText>
						</S.TrackTitle>
						<S.TrackAuthor>
							<S.TrackAuthorLink href="http://">
								Nero
							</S.TrackAuthorLink>
						</S.TrackAuthor>
						<S.TrackAlbum>
							<S.TrackAlbumLink href="http://">
								Welcome Reality
							</S.TrackAlbumLink>
						</S.TrackAlbum>
						<S.TratrackTime>
							<S.TratrackTimeSvg alt="time">
								<use xlinkHref="img/icon/sprite.svg#icon-like" />
							</S.TratrackTimeSvg>
							<S.TratrackTimeText>4:44</S.TratrackTimeText>
						</S.TratrackTime>
					</S.PlaylistTrack>
				</S.PlaylistItem>
				<S.ContentPlaylist>
					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Elektro <S.TrackTitleSpan />
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									Dynoro, Outwork, Mr. Gee
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Elektro
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>2:22</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										I’m Fire <S.TrackTitleSpan />
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									Ali Bakgor
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									I’m Fire
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>2:22</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Non Stop
										<S.TrackTitleSpan >(Remix)</S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									Стоункат, Psychopath
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Non Stop
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>4:12</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Run Run
										<S.TrackTitleSpan >(feat. AR/CO)</S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									Jaded, Will Clarke, AR/CO
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Run Run
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>2:54</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Eyes on Fire
										<S.TrackTitleSpan >(Zeds Dead Remix)</S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									Blue Foundation, Zeds Dead
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Eyes on Fire
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>5:20</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Mucho Bien
										<S.TrackTitleSpan >
											(Hi Profile Remix)
										</S.TrackTitleSpan>
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									HYBIT, Mr. Black, Offer Nissim, Hi Profile
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Mucho Bien
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>3:41</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>

					<S.PlaylistItem>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
									<S.TrackTitleSvg alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										Knives n Cherries
										<S.TrackTitleSpan />
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									minthaze
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									Captivating
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>1:48</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>
				</S.ContentPlaylist>
			</S.CenterblockContent>
		</S.MainCenterblock>
	)
}
