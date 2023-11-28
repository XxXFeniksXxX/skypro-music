import * as S from './styles.js'

export const Searchblock = () => {
	return (
		<S.centerblockSearch>
			<S.SearchSvg>
				<use xlinkHref="./img/icon/sprite.svg#icon-search" />
			</S.SearchSvg>
			<S.SearchText
				type="search"
				placeholder="Поиск"
				name="search"
			/>
		</S.centerblockSearch>
	)
}
