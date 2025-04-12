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

    &:hover {
        background: ${theme.colors.red2};
        cursor: pointer;
    }
    
`;

export const IconArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 100%;
`;