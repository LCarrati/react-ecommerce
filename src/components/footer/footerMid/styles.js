import styled from "styled-components";

export const Container = styled.section`
    color: #fff;
    height: 286px;
    background-color: #ff6000;
    && .footerMidSection {
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
    && h4{
        margin-bottom: 10px;
    }
    && hr {
        margin: 10px 0;
        color: #90909042;
        border: 1px solid;
    }
    && p{
        margin-bottom: 4px;
    }
    && .subtitle {
        font-weight: bold;
        color: #012f52;
    }
    && .socialIconsDiv{
        display: flex;
        gap: 10px;
    }
    && svg{
            cursor: pointer;
            &:hover {
                color:#062f4f;
            }
    }
    && a{
        text-decoration: none;
        color: white;
    }
    && a:hover {
        color: #062f4f;
    }
`