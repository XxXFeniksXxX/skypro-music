import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Content = styled.div`
    height: 1000px;
    display: flex;
    gap: 16px;
    background-color: #181818;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

export const LinkElement = styled(NavLink)`
    color: #181818;
    text-decoration: none;
    
    &:hover{
        text-decoration: underline;
    }
`

export const Button = styled.button`
    width: 66px;
    height: 22px;
    &:hover{
    -webkit-text-stroke: 1px #000000;
`
export const LinkElementButton = styled(NavLink)`
    color: #181818;
    width: 66px;
    height: 22px;
    &:hover{
    -webkit-text-stroke: 1px #000000;
`

export const Title  = styled.h1`

`