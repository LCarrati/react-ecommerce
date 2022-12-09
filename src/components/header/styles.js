import styled from "styled-components";

export const Container = styled.header`
    /* border-bottom: 1px solid #90909021; */
    background: #062f4f;
    font-size: 12px;
    line-height: normal;
    color: #fff;
    height: 83px;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    && img {
        height: 37px;
        cursor: pointer;
    }

    && a{
        text-decoration: none;
        color: #fff;
    }
    && .headerLayout {
        width: 1140px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 83px;
        
    }
`;

export const NavMenu = styled.nav`
    height: 62px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6000;
    && .horizontal {
        display: flex;
        flex-direction: column;
    }
    && .menuItem {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 16px;
        padding: 0 16px;
        min-height: 42px;
        border-radius: 5px;
        margin: 10px 0;
        /* position: relative; */
        cursor: pointer;
    }
    && .menuItem:hover{
        background-color: rgba(244, 244, 244, 0.1);
        box-shadow: 0px 3px 3px 0px rgb(20 20 20 / 20%);
        opacity: 1;
    }
`

export const RocketMenuStyle = styled.div`
    position: absolute;
    top: 145px;
    color: #062f4f;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ececec;
    && h4 {
        cursor: pointer;
    }
`