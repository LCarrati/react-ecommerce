import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 600px;
    margin: 25px 0;
    width: 390px;

    && h3{
        font-size: 24px;
        font-weight: 700;
        color: #313131;
        line-height: 26px;
        margin-bottom: 13px;
    }
    && .codSKU{
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eaeaea;
        & span{
            font-weight: normal;
        }
    }
    && li {
        float: left;
        line-height: normal;
        margin-right: 9px;
        margin-bottom: 9px;
        list-style-type: none;
        border-radius: 3px;
        padding: 2px;
        margin: 0;
        box-shadow: 0px 1px 2px 0px rgb(137 137 137 / 13%);
        border: 1px solid #d6d6d6;
        & span{
            font-size: 13px;
            min-width: 39px;
            min-height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-width: 0 0 30px 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            color: #666;
            padding: 0 10px;
        }
    }
    && ul{
        margin-top: 15px;
        display: flex;
        gap: 15px;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
    && .selectOption{
        font-size: 12px;
        line-height: normal;
    }
    && .price{
        font-size: 25px;
        font-weight: 400;
        color: #666;
        margin-right: 7px;
        & span{
            font-size: 30px !important;
            line-height: 30px;
            font-weight: 700;
            margin: 0 !important;
            color: #062f4f;
        }
    }
    && .credit {
        font-size: 16px;
        color: #313131;
        line-height: 15px;
        & span {
            color: #062f4f;
            font-weight: bold;
            font-size: 16px;
        }
    }
    && .buyButtonBorder {

        border-bottom: 1px solid #eaeaea;
        margin: 20px 0;
        padding-bottom: 20px;
    }
    && button{
        background-color: #4caf50;
        color: #fff;
        border: 1px solid #4caf50;
        box-shadow: 0px 2px 3px 0px rgb(203 203 203 / 50%);
        border-radius: 4px;
        font-size: 22px;
        font-weight: 700;
        height: 54px;
        width: 100%;
    }
`