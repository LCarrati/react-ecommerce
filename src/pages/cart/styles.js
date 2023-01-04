import styled from "styled-components";

export const Wrapper = styled.main`
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    && .checkoutButtonArea{
        display: flex;
        align-items: center;
        width: 1140px;
        justify-content: flex-end;
        margin-bottom: 25px;
    }

    && button{
            margin: 4px auto 5px;
        }

    && h1 {
        font-size: 19px;
        line-height: 22px;
        font-weight: 700;
        color: #2b2a2a;
        margin: 25px auto 3px;
        align-self: flex-start;
        width: 1140px;
        padding-left: 20px;
        & span{
            font-size: 17px;
            text-transform: none;
            font-weight: 300;
            line-height: 1;
            color: #666666;
        }
    }
    && a{
        text-decoration: none;
    }

`

export const CartList = styled.div`
    font-size: 12px;
    line-height: normal;
    color: #313131;
    font-family: Roboto;
    margin: 0 auto;
    /* box-sizing: border-box; */
    background: #fff;
    border-radius: 4px 4px 0 0 ;
    box-shadow: 0 1px 6px 3px rgb(181 181 181 / 15%);
    border: 1px solid #ececec;
    border-bottom: 0;
    padding: 0;
    /* margin-bottom: 20px; */
    border-color: #e0e0e0;
    width: 1140px;
    && .tableHeader{
        /* margin: 0 auto;
        width: 1138px;
        border-radius: 4px 4px 0 0;
        height: 40px; */
        background-color: #F7F7F7;
        font-size: 18px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 3.6fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    }
    && .tableHeader > div:first-child{
            width:100%;
            margin-left: 30px;
        }
    && li{
        list-style: none;
    }
`
export const CartTotal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 1140px;
    background-color: #dcdcdc;
    height: 100px;
    padding-right: 56px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 1px 6px 3px rgb(181 181 181 / 15%);
    border: 1px solid #ececec;
    border-top: 0;
    /* margin-bottom: 25px; */
    border-color: #e0e0e0;
`

export const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    font-size: 28px;
    font-weight: bold;
`