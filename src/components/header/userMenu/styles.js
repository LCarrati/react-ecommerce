import styled from "styled-components";

export const Wrapper = styled.div`
    width: 132px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 5px;
    cursor: pointer;
    &:hover {
        background-color: #103755;
        box-shadow:inset 0 0 0px 1px rgb(160 160 160 / 28%);
        border-radius: 5px;
        height: 65%;
        /* width: 100%; */
    }
    && a{
        display: flex;
        gap: 5px;
    }
`