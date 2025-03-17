import styled from "styled-components"
import {theme} from "../../themes.js"


export const PageContainer = styled.div`
    background: ${theme.colors.black1};
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`;

export const SplashArtArea = styled.div`
    background: ${theme.colors.red1};
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; 
        opacity: 0.1;
        z-index: 0;
    }
`;

export const LoginArea = styled.div`
    background: ${theme.colors.white1};
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.gray2};

    h1 {
        font-family: "Chau Philomene One", sans-serif;
    }

    h2 {
        font-family: "Chau Philomene One", sans-serif;
    }

    p {
        font-family: "Open Sans", sans-serif;
    }

    button {
        border: none;
        background: ${theme.colors.red1};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65px;
        height: 65px;
        border-radius: 20px;
        margin-top: 15px;
        transition: 0.2s ease;

        &:hover {
            cursor: pointer;
            background: ${theme.colors.red2};
        }

        img {
            width: 70%;
        }
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

export const LogoArea = styled.div`
    height: 200px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginInputArea = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Open Sans", sans-serif;

    label {
        margin-top: 40px;
        margin-left: 20px;
    }
`;

export const LoginInput = styled.input`
    background: ${theme.colors.gray1};
    display: flex;
    border: none;
    height: 45px;
    border-radius: 20px;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
`;
