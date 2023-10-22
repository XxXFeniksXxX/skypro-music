import * as S from './App.style.js'
import { TrackList } from './components/TrackList/TrackList';
import { Nav } from './components/Nav/Nav';
import { SideBar } from './components/SideBar/SideBar';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';
import { GlobalStyle } from './App.style.js';
export function App() {
	return (
		<S.Wrapper>
			<GlobalStyle />
			<S.Container>
				<S.Main>
					<Nav />
					<TrackList />
					<SideBar />
				</S.Main>
				<AudioPlayer />
				<S.Footer />
			</S.Container>
		</S.Wrapper>
	);
}
