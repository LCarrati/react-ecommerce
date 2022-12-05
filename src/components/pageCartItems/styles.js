import styled from 'styled-components';

export const Wrapper = styled.section`
    && img{
        width: 90px;
    }
    && th{
        font-size: 20px;
    }
    && .table{
        /* margin: 0 auto; */
        width: 1138px;
        font-size: 18px;
        /* background-color: #F7F7F7; */
        border-radius: 4px 4px 0 0;
        /* height: 40px; */
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 0fr 3fr 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
    }
    && .produto-info {
        justify-self: self-start;
        margin-left: 30px;
    }
`