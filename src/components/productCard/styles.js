import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 273px;
    /* height: 435px; */
    border: 1px solid #ececec;
    box-shadow: 0 1px 4px 1px rgb(181 181 181 / 10%);
    border-radius: 4px;
    cursor: pointer;
    
    & img {
        width: 270px;
        height: 270px;
        margin-bottom: 12px;
    }

    & hr {
        border: 1px solid #ececec;
        width: 248px;
        margin: 5px auto 0;
    }

    & .productName{
        font-size: 18px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        /* margin-bottom: 10px; */
        font-weight: 400;
        color: #313131;
    }
    & .linkProductName{
        height: 51px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .productPrice{
        font-size: 19px;
        line-height: 21px;
        font-weight: 700;
        margin: 0;
        color: #062f4f;
        white-space: nowrap;
    }
    & p{
        font-size: 14px;
    }
    & span{
        font-weight: bold;
        color: #062f4f;
    }
    && a{
        text-decoration: none;
    }
`