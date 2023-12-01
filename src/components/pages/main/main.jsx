import * as S from '../../../App.style.js'
import { Nav } from "../../Nav/Nav";
import { TrackList } from "../../TrackList/TrackList";
import { SideBar } from "../../SideBar/SideBar";

export const MainContent = () => {
    return (
        <S.Container>
				<S.Main>
					<Nav />
					<TrackList />
					<SideBar />
				</S.Main>
				<S.Footer />
			</S.Container>
    );
  }