import * as S from './styles.js'
import React, { useRef, useState, useEffect } from 'react'
import { getTracksById } from '../../Api.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const AudioPlayer = ({ playingState }) => {
	// const [tracks, setTracks] = useState([]);
	// 	useEffect(() => {
	// 		getTracksById().then((tracks) => {
	// 			console.log(tracks);
	// 		})
	// 	}, []);



	const iconRef = useRef(null);
	useEffect(() => {
		console.log(iconRef);
	});
	const PlayKlick = () => {
		iconRef.current.play();
	}

	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<S.Bar>
			<S.BarContent>
				<S.BarPlayerProgress />
				<S.BarPlayerBlock><audio controls src="../../audio/IMG_0593.mp3">
					<a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
				</audio>
					<S.BarPlayer>
						<S.PlayerControls>
							<S.PlayerBtnPrev>

								<S.PlayerBtnPrevSvg alt="prev">
									<use xlinkHref="img/icon/sprite.svg#icon-prev" />
								</S.PlayerBtnPrevSvg>
							</S.PlayerBtnPrev>
							<S.PlayerBtnPlay className="_btn" ref={iconRef}>
								<S.PlayerBtnPlaySvg alt="play">
									<use xlinkHref="img/icon/sprite.svg#icon-play" />
								</S.PlayerBtnPlaySvg>
							</S.PlayerBtnPlay>
							<S.PlayerBtnNext>
								<S.PlayerBtnNextSvg alt="next">
									<use xlinkHref="img/icon/sprite.svg#icon-next" />
								</S.PlayerBtnNextSvg>
							</S.PlayerBtnNext>
							<S.PlayerBtnRepeat className="_btn-icon">
								<S.PlayerBtnRepeatSvg alt="repeat">
									<use xlinkHref="img/icon/sprite.svg#icon-repeat" />
								</S.PlayerBtnRepeatSvg>
							</S.PlayerBtnRepeat>
							<S.PlayerBtnShuffle className="_btn-icon">
								<S.PlayerBtnShuffleSvg alt="shuffle">
									<use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
								</S.PlayerBtnShuffleSvg>
							</S.PlayerBtnShuffle>
						</S.PlayerControls>
						<SkeletonTheme baseColor='#474747' highlightColor='#313131'>
							<S.PlayerTrackPlay>
								<S.TrackPlayContain >
									<S.TrackPlayImage>
										{loading ? (<Skeleton width={50} height={50} />) : 
										(<S.TrackPlaySvg alt="music">
											<use xlinkHref="img/icon/sprite.svg#icon-note" />
										</S.TrackPlaySvg>)}
									</S.TrackPlayImage>
									<S.TrackPlayAuthor>
										{loading ? (<Skeleton width={50} height={20} />) :
											(<S.TrackPlayAuthorLink href="http://">
												{playingState.name}
											</S.TrackPlayAuthorLink>)}
									</S.TrackPlayAuthor>
									<S.TrackPlayAlbum>
										{loading ? (<Skeleton width={50} height={20} />) :
											<S.TrackPlayAlbumLink href="http://">
												{playingState.author}
											</S.TrackPlayAlbumLink>}
									</S.TrackPlayAlbum>
								</S.TrackPlayContain>
								<S.TrackPlayLikeDis>
									<S.TrackPlayLike className="_btn-icon">
										<S.TrackPlayLikeSvg alt="like">
											<use xlinkHref="img/icon/sprite.svg#icon-like" />
										</S.TrackPlayLikeSvg>
									</S.TrackPlayLike>
									<S.TrackPlayDislike className="_btn-icon">
										<S.TrackPlayDislikeSvg alt="dislike">
											<use xlinkHref="img/icon/sprite.svg#icon-dislike" />
										</S.TrackPlayDislikeSvg>
									</S.TrackPlayDislike>
								</S.TrackPlayLikeDis>
							</S.PlayerTrackPlay>
						</SkeletonTheme>
					</S.BarPlayer>
					<S.BarVolumeBlock>
						<S.VolumeContent>
							<S.VolumeImage>
								<S.VolumeSvg alt="volume">
									<use xlinkHref="img/icon/sprite.svg#icon-volume" />
								</S.VolumeSvg>
							</S.VolumeImage>
							<S.VolumeProgress className="_btn">
								<S.VolumeProgressLine
									className="_btn"
									type="range"
									name="range"
								/>
							</S.VolumeProgress>
						</S.VolumeContent>
					</S.BarVolumeBlock>
				</S.BarPlayerBlock>
			</S.BarContent>
		</S.Bar>
	)
}
