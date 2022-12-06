import styled from 'styled-components';
import chevron from '../../../assets/icons8-chevron-right-30.png'

export const Wrapper = styled.section`
    height: 44px;
    background-color: #f5f5f5;
    display: flex;
    border-bottom: 1px solid #90909021;
    box-shadow: 0px 1px 4px 0px rgb(137 137 137 / 12%);
    justify-content: space-around;
`

export const Container = styled.div`
    width: 1140px;
    display: flex;
    align-items: center;
    color: #9f9f9f;
    font-size: 15px;
    gap: 10px;
    && li {
        float: left;
        padding: 2px;
        /* list-style-position: inside;
        list-style-image: url('/src/assets/icons8-chevron-right-30.png'); */
        list-style: none;
        display: flex;
        align-content: center;
    }
    /* && li::before {
        margin-right: 5px;
        display: inline-block;
        width: 16px;
        height: 16px;
        content: "";
        background: url('/src/assets/icons8-chevron-right-30.png');
        background-size:16px 16px;
        margin-top: 4px;
    } */

    && li ~ li::before {
        margin-right: 5px;
        display: inline-block;
        width: 16px;
        height: 16px;
        content: "";
        background: url('./icons8-chevron-right-30.png');
        background-size:16px 16px;
        margin-top: 4px;
    }
    && .homeIcon{
        display: flex;
        align-content: center;
        width: 14px;
        height: 16px;
    }
`