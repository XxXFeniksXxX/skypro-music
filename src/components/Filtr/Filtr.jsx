import * as S from './styles.js'

export function FiltrExecutor() {
    return (
        <S.ExecutorFilter>
            <S.ExecutorText href="#">Nero</S.ExecutorText>
            <S.ExecutorText href="#">Dynoro, Outwork, Mr. Gee</S.ExecutorText>
            <S.ExecutorText href="#">Ali Bakgor</S.ExecutorText>
            <S.ExecutorText href="#">Стоункат, Psychopath</S.ExecutorText>
            <S.ExecutorText href="#">Blue Foundation, Zeds Dead</S.ExecutorText>
            <S.ExecutorText href="#">HYBIT, Mr. Black, Offer Nissim, Hi Profile</S.ExecutorText>
            <S.ExecutorText href="#">minthaze</S.ExecutorText>
            <S.ExecutorText href="#">Jaded, Will Clarke, AR/CO</S.ExecutorText>
        </S.ExecutorFilter>
    )
}

export function FiltrYear() {
    return (
        <S.YearFilter>
            <S.ExecutorText href="#">2002</S.ExecutorText>
            <S.ExecutorText href="#">2003</S.ExecutorText>
            <S.ExecutorText href="#">2004</S.ExecutorText>
        </S.YearFilter>
    )
}

export function FilterGenre() {
    return (
        <S.GenryFilter>
            <S.ExecutorText href="#">Рок</S.ExecutorText>
            <S.ExecutorText href="#">Хип-хоп</S.ExecutorText>
            <S.ExecutorText href="#">Поп-музыка</S.ExecutorText>
            <S.ExecutorText href="#">Техно</S.ExecutorText>
            <S.ExecutorText href="#">Инди</S.ExecutorText>
        </S.GenryFilter>
    )
}