import styled from "styled-components"
import {theme} from "../../themes.js"


export const PageContainer = styled.div`
    background: ${theme.colors.black1};
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export const SideBarArea = styled.div`
    background: ${theme.colors.black1};
    height: 100%;
    width: 30%;
`;

export const ContentArea = styled.div`
    background: ${theme.colors.white1};
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
