import styled from 'styled-components';

export const Wrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 400px;
    /* height: 470px; */
    border: 1px solid black;
    position: absolute;
    z-index: 2;
    background-color: #031c31db;
    /* margin-top: 62px; */
    top: 82px;
    padding: 10px 20px;
    margin-right: 246px;
    backdrop-filter: blur(5px);
    && .minicartButtonHeader{
        margin: 5px 0 0;
        text-align: end;
    }
    && .minicartTotalCheckout{
        display: flex;
        align-items: center;
    }
    && hr {
    margin: 10px 0;
    }

`

export const CartItemsWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;   
`