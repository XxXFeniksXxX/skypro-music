import { styled } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
`

export const Container = styled.div`
    max-width: 1920px;
    /* height: 100vh; */
    margin: 0 auto;
    position: relative;
    background-color: #181818;
`

export const Main = styled.main`
    flex: 1 1 auto;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`

export const Footer = styled.footer`

`

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:before,
*:after {
	box-sizing: border-box;
}

a,
a:visited {
	text-decoration: none;
	font-family: 'StratosSkyeng', sans-serif;
	cursor: pointer;
}

ul li {
	list-style: none;
}

@font-face {
	font-family: 'StratosSkyeng';
	src:
		local('StratosSkyeng'),
		local('StratosSkyeng'),
		url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
		url('../public/fonts/StratosSkyeng.woff') format('woff');
	font-weight: 400;
	font-style: normal;
}

html,
body {
	width: 100%;
	height: 100%;
	font-family: 'StratosSkyeng', sans-serif;
	color: #ffffff;
}
`

