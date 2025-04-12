import styled from "styled-components"
import {theme} from "../../themes.js"

export const MainContainer = styled.div`
    /* background: ${theme.colors.red1}; */
    display: flex;
    align-items: center;
    height: 80px;
    width: 80%;
    font-family: "Open Sans", sans-serif;
    color: ${theme.colors.red1};
    
    label {
        margin-left: 10px;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.red1};
        transition: 0.2s;
        font-size: 20px;

        &:hover {
            color: ${theme.colors.red2};
        }
    }
`;