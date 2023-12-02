import { Searchblock } from '../Searchblock/Searchblock';
import * as S from './styles.js';
import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { FiltrExecutor, FiltrYear, FilterGenre } from '../Filtr/Filtr'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer.jsx';
import { getTracks } from '../../Api.js';

export const TrackList = () => {
	const [tracks, setTracks] = useState([]);
	const [addtrackError, setAddtrackError] = useState(null);
	useEffect(() => {
		getTracks().then((tracks) => {
			setTracks(tracks);
			console.log(tracks);
		}).catch((error) => {
			setAddtrackError(("Ошибка сервера, попробуйте позже: ") + error.message);
		 })
	}, []);
	const [playingState, setPlayingState] = useState(null);
	const PlayTrack = (track) => {
		setPlayingState(track);
	}
	const style = {
		color: '#ad61ff',
	}
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
		}, 1000)
	}, [])

	return (
		<div className='rte'>
			<S.MainCenterblock className="centerblock">
				<Searchblock />
				<S.CenterblockH2>Треки</S.CenterblockH2>
				<S.CenterblockFilter className="filter">
					<S.FilterTitle>Искать по:</S.FilterTitle>
					<div>
						<S.FilterButton className={`${isActiveExecutor ? {style} : ""}`} onClick={menuExecutorClick}>
							исполнителю
						</S.FilterButton>
						{visibleExecutor && <div>
							<FiltrExecutor />
						</div>
						}
					</div>
					<div>
						<S.FilterButton className={`${isActiveYear ? "active" : ""}`} onClick={menyYearClick}>году выпуска
						</S.FilterButton>
						{visibleYear && <div>
							<FiltrYear />
						</div>
						}
					</div>
					<div>
						<S.FilterButton className={`${isActiveGenre ? "active" : ""}`} onClick={menyGenreClick}> жанру
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
						<S.Error>{addtrackError}</S.Error>
						<SkeletonTheme baseColor='#474747' highlightColor='#313131'>
					{tracks ?.map((track) => {
						return <S.PlaylistItem key={track.id}>
						<S.PlaylistTrack className="track">
							<S.TrackTitle>
								<S.TrackTitleImage>
								{loading ? (<Skeleton width={50} height={50} />) :
									<S.TrackTitleSvg alt="music">
										<use xlinkHref = "img/icon/sprite.svg#icon-note" />
									</S.TrackTitleSvg>}
								</S.TrackTitleImage>
								<S.TrackTitleText>
								{loading ? (<Skeleton width={330} height={20} />) :
									<S.TrackTitleLink onClick={() => PlayTrack(track)}>
										{track.name}
									</S.TrackTitleLink>}
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
							{loading ? (<Skeleton width={280} height={20} />) :
								<S.TrackAuthorLink href="http://">
									{track.author}
								</S.TrackAuthorLink>}
							</S.TrackAuthor>
							<S.TrackAlbum>
							{loading ? (<Skeleton width={290} height={20} />) :
								<S.TrackAlbumLink href="http://">
									{track.genre}
								</S.TrackAlbumLink>}
							</S.TrackAlbum>
							<S.TratrackTime>
								<S.TratrackTimeSvg alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</S.TratrackTimeSvg>
								<S.TratrackTimeText>{((track.duration_in_seconds)/60).toFixed(2)}</S.TratrackTimeText>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>
					})}
					</SkeletonTheme>
				</S.CenterblockContent>
			</S.MainCenterblock>
				<S.AudioPlayerD className='dcc'>
					{playingState ? (<AudioPlayer tracks={tracks} playingState={playingState}/>) : null}
				</S.AudioPlayerD>
		</div>
	)
}
