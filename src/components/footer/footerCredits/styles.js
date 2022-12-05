import styled from "styled-components";

export const Container = styled.section`
    height: 63px;
    background-color: #eaeaea;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    && .githubIcon {
        transition: all .5s ease-in-out;
        cursor: pointer;
    }
    && .githubIcon:hover {
        transform: rotate(720deg) scale(1.8);
    }
`