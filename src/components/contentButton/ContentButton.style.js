import styled from "styled-components"
import {theme} from "../../themes.js"

export const MainContainer = styled.div`
    background: ${theme.colors.red1};
    display: flex;
    align-items: center;
    height: 100px;
    width: 100px;
    font-family: "Open Sans", sans-serif;
    color: ${theme.colors.white1};
    border-radius: 10px;

    &:hover {
        background: ${theme.colors.red2};
        cursor: pointer;
    }
    
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    label{
        text-align: center;
    }

`;