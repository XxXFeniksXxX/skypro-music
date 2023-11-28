import { Searchblock } from '../Searchblock/Searchblock';
import * as S from './styles.js';
import React, { useState, useEffect } from 'react'
import { Skelet } from '../SkeletAll/SkeletTrack'
import { FiltrExecutor, FiltrYear, FilterGenre } from '../Filtr/Filtr'
import { getTodos } from '../../Api.js';
// import { getTodos } from '../../Api.js';
export const ApiRenderTreck = () => {
	
  };
export const TrackList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos().then((todos) => {
			console.log(todos);
			setTodos(todos.todos);
			console.log(`${todos}`);
		});
	}, []);

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
		}, 10)
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
				
				{todos ?.map((todo) => {
					 return <S.PlaylistItem key={todo.id}>
					 <S.PlaylistTrack className="track">
						<S.TrackTitle>
							<S.TrackTitleImage>
								<S.TrackTitleSvg alt="music">
									<use xlinkHref = {todo.img} />
								</S.TrackTitleSvg>
							</S.TrackTitleImage>
							<S.TrackTitleText>
								<S.TrackTitleLink href="http://">
									{todo.track} <S.TrackTitleSpan >
											{todo.note}
										</S.TrackTitleSpan>
										<S.TrackTitle/>
								</S.TrackTitleLink>
							</S.TrackTitleText>
						</S.TrackTitle>
						<S.TrackAuthor>
							<S.TrackAuthorLink href="http://">
								{todo.executor}
							</S.TrackAuthorLink>
						</S.TrackAuthor>
						<S.TrackAlbum>
							<S.TrackAlbumLink href="http://">
								{todo.album}
							</S.TrackAlbumLink>
						</S.TrackAlbum>
						<S.TratrackTime>
							<S.TratrackTimeSvg alt="time">
								<use xlinkHref="img/icon/sprite.svg#icon-like" />
							</S.TratrackTimeSvg>
							<S.TratrackTimeText>{todo.time}</S.TratrackTimeText>
						</S.TratrackTime>
					</S.PlaylistTrack>
				</S.PlaylistItem>
				})}
			</S.CenterblockContent>
		</S.MainCenterblock>
	)
}
