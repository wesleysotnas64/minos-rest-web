import styled from "styled-components"
import {theme} from "../../themes.js"


export const MainContainer = styled.div`
    background: ${theme.colors.red1};
    color: ${theme.colors.white1};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h2 {
        font-family: "Chau Philomene One", sans-serif;
    }

    label, p{
        font-family: "Open Sans", sans-serif;
    }

    footer {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: auto;
        margin-bottom: 20px;
    }
`;

export const FunctionsArea = styled.div`
    width: 80%;
    flex-grow: 1;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
  }
`;