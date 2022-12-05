import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin: 25px 0;

`

export const MiniImages = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;
    /* background-color: blue; */
    width: 102px;
    align-items: center;
    padding: 6px;
    && li {
        list-style: none;
    }
    && img{
        width: 90px;
        height: 90px;
    }
`

export const BigImage = styled.div`
    width: 600px;
    height: 600px;
    && img{
        width: 600px;
        height: 600px;
    }
    /* background-color: red; */
`
