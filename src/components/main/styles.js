import styled from "styled-components";

export const Wrapper = styled.main`
    background: #fff;
    font-size: 12px;
    line-height: normal;
    color: #313131;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 30px;
    text-align: center;
    gap: 25px;
    max-width: 1140px;
    && .categoryName {
        font-size: 30px;
        /* margin: 25px auto 0px; */
        border-bottom: 5px dotted #ff6000;
        width: 100%;
        height: 70px;
        padding-top: 12px;
        background-color: aliceblue;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 20px; */
    gap: 16px;
    flex-wrap: wrap;
`;

export const ProductsMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    && .filtroValor {
        display: flex;
        gap: 35px;
    }
    && input{
        padding-left: 3px;
    }
    && .alinhaFiltro{
        display: flex;
    }
`
