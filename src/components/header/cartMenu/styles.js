import styled from "styled-components";

export const Wrapper = styled.div`
    width: 152px;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    align-items: center;

    && span {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }

    && a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        height: 43px;
    }

    && .miniCart{
        cursor: pointer;
    }
    && a:hover {
        background-color: #103755;
        box-shadow:inset 0 0 0px 1px rgb(160 160 160 / 28%);
        border-radius: 5px;
        height: 65%;
        width: 100%;
    }
    && .cartNumber {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #4caf50;
        border-radius: 50%;
        width: 18px;
        height: 19px;
        border: 1px solid white;
        text-align: center;
        font-size: 12px;
    }
    && .miniCartWrapper {
       position: relative;
    }
`