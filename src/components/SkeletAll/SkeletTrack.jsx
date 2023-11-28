import * as S from '../TrackList/styles.js';
import { Searchblock } from '../Searchblock/Searchblock'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Skelet = () => {
	return (
		<SkeletonTheme baseColor='#474747' highlightColor='#313131'>
			<S.MainCenterblock className="centerblock">
				<Searchblock />
				<S.CenterblockH2>Треки</S.CenterblockH2>
				<S.CenterblockFilter className="filter">
					<S.FilterTitle>Искать по:</S.FilterTitle>
					<div>
						<S.FilterButton>
							исполнителю
						</S.FilterButton>
					</div>
					<div>
						<S.FilterButton>году выпуска
						</S.FilterButton>
					</div>
					<div>
						<S.FilterButton> жанру
						</S.FilterButton>
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
									<Skeleton width={50} height={50} />
								</S.TrackTitleImage>
								<S.TrackTitleText>
									<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} />
									</S.TrackTitleLink>
								</S.TrackTitleText>
							</S.TrackTitle>
							<S.TrackAuthor>
								<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
								</S.TrackAuthorLink>
							</S.TrackAuthor>
							<S.TrackAlbum>
								<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
								</S.TrackAlbumLink>
							</S.TrackAlbum>
							<S.TratrackTime>
							</S.TratrackTime>
						</S.PlaylistTrack>
					</S.PlaylistItem>
					<S.ContentPlaylist>
						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>

						<S.PlaylistItem>
							<S.PlaylistTrack className="track">
								<S.TrackTitle>
									<S.TrackTitleImage>
										<Skeleton width={50} height={50} />
									</S.TrackTitleImage>
									<S.TrackTitleText>
										<S.TrackTitleLink href="http://">
										<Skeleton width={330} height={20} /> <S.TrackTitleSpan />
										</S.TrackTitleLink>
									</S.TrackTitleText>
								</S.TrackTitle>
								<S.TrackAuthor>
									<S.TrackAuthorLink href="http://">
									<Skeleton width={280} height={20} />
									</S.TrackAuthorLink>
								</S.TrackAuthor>
								<S.TrackAlbum>
									<S.TrackAlbumLink href="http://">
									<Skeleton width={290} height={20} />
									</S.TrackAlbumLink>
								</S.TrackAlbum>
								<S.TratrackTime>
								</S.TratrackTime>
							</S.PlaylistTrack>
						</S.PlaylistItem>
					</S.ContentPlaylist>
				</S.CenterblockContent>
			</S.MainCenterblock>
		</SkeletonTheme>
	)
}
