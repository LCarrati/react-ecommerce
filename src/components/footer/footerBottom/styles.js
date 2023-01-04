import styled from "styled-components";

export const Container = styled.section`
    height: 325px;
    background-color: #062f4f;
    color: white;
    && .footerBottomSection {
        display: flex;
        gap: 91px;
        margin: 0 auto;
        width: 975px;
        padding-top: 20px;
        justify-content: space-between;
        && div {
            display: flex;
            flex-direction: column;
        }
    }
    && img{
        width: 161px;
        margin: 10px 0 15px;
    }
    && h4{
        margin-bottom: 10px;
    }
    && p{
        margin-bottom: 10px;
    }
    && .littleMargin{
        margin-top: 70px;
    }
    && span{
        font-weight: bold;
        color: #ff6000;
    }
    && a{
        text-decoration: none;
        color: #ff6000;
    }
    && a:hover {
            color: white;
    }
`