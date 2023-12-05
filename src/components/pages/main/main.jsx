import * as S from '../../../App.style.js'
import { Nav } from "../../Nav/Nav";
import { TrackList } from "../../TrackList/TrackList";
import { SideBar } from "../../SideBar/SideBar";

export const MainContent = ({tracks, addtrackError, handleLogout}) => {
    return (
        <S.Container>
				<S.Main>
					<Nav handleLogout={handleLogout}/>
					<TrackList tracks={tracks} addtrackError={addtrackError}/>
					<SideBar />
				</S.Main>
				<S.Footer />
			</S.Container>
    );
  }