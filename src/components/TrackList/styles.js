import { styled } from 'styled-components';

export const MainCenterblock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
`

export const CenterblockH2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`

export const CenterblockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
    gap: 15px;
`

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;  
`

export const CenterblockContent = styled.div`
    display: flex;
    flex-direction: column; 
`

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const PlaylistTitleCol01 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 447px;
`
export const PlaylistTitleCol02 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 321px;
`
export const PlaylistTitleCol03 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 245px;
`
export const PlaylistTitleCol04 = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;

    width: 60px;
	text-align: flex-end;
`

export const PlaylistTitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`

export const PlaylistItem = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`

export const PlaylistTrack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const TrackTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`

export const TrackTitleText = styled.div`

`

export const TrackTitleLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`

export const TrackAuthor = styled.div`
    width: 321px;
    display: flex;
    justify-content: flex-start;
`

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-align: left;
`

export const TrackAlbum = styled.div`
    width: 245px;
`

export const TrackAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
`

export const TratrackTime = styled.div`
    
`

export const TratrackTimeSvg = styled.svg`
    width: 14px;
    height: 12px;
    margin - right: 17px;
    fill: transparent;
    stroke: #696969;
`

export const TratrackTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`

export const ContentPlaylist = styled.div`
    display: flex;

    flex-direction: column;
    overflow-y: auto;
`