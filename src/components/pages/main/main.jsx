import * as S from '../../../App.style.js'
import { Nav } from "../../Nav/Nav";
import { TrackList } from "../../TrackList/TrackList";
import { SideBar } from "../../SideBar/SideBar";
// import { AudioPlayer } from '../../AudioPlayer/AudioPlayer.jsx';

export const MainContent = ({ tracks, addtrackError }) => {
    return (
        <S.Container>
				<S.Main>
					<Nav />
					<TrackList tracks = {tracks} addtrackError={addtrackError}/>
					<SideBar />
				</S.Main>
				<S.Footer />
			</S.Container>
    );
  }