import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Page = styled.div`
    background: #181818;
    height: 1000px;
    padding: 0;
`

export const Frame = styled.div`
    width: 366px;
    padding-top: 360px;
    margin-left: auto;
    margin-right: auto;
`
export const FrameContent = styled.div`
    height: 438px;
    display: flex;
    gap: 16px;
    background-color: #181818;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 12px;
    background: #FFF;
`
export const Title = styled.div`
    padding-top: 43px;
    margin-left: 113px;
`
export const SearchTextMail = styled.input`
    color: #181818;
    font-family: StratosSkyeng;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.054px;
    
    padding-top: 23px;
    margin-left: 41px;
    margin-right: 47px;
    padding-bottom: 8px;
    border: 0;
    border-bottom: 1px solid #D0CECE;
    background-color: rgba(0,0,0,0);
    outline: 0; 
    font-size: 18px;

     &::placeholder {
        color: #E1E1E1;
    }
`
export const SearchTextPassword = styled.input`
    color: #181818;
    font-family: StratosSkyeng;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.054px;
    
    padding-top: 12px;
    margin-left: 41px;
    margin-right: 47px;
    padding-bottom: 8px;
    border: 0;
    border-bottom: 1px solid #D0CECE;
    background-color: rgba(0,0,0,0);
    outline: 0; 
    font-size: 18px;
    &::placeholder {
        color: #E1E1E1;
    }
`

export const Button = styled.button`

`
export const LinkElementButton = styled(NavLink)`
    

    margin-left: 41px;
    margin-top: 53px;
    border-radius: 6px;
    background: var(--palette-purple-90, #580EA2);
    &:hover{
    background: #3F007D;
    }
    &:active{
        background: var(--palette-purple-100, #271A58);
    }

    display: flex;
    justify-content: center;
    align-items: center;
    width: 278px;
    height: 52px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 

`

export const LinkElement = styled(NavLink)`
    margin-top: 10px;
    margin-left: 41px;
    width: 278px;
    height: 52px;
    border-radius: 6px;
    border: 1px solid #D0CECE;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.054px;
`

export const Error = styled.div`
    padding-left: 23px;
    height: 29px;
    display: flex;
    align-items: center;
    color: #FFF;
    background: #3F007D;
`