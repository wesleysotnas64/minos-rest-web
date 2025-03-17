import styled from "styled-components"
import {theme} from "../../../../themes.js"

export const MainContainer = styled.div`
    background: ${theme.colors.white1};
    color: ${theme.colors.black1};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        background: ${theme.colors.gray1};
    }
`;