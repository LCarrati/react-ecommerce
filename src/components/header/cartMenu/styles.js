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
`