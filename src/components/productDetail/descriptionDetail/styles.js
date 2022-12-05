import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 1140px;
    margin: 0 auto;
    && .descTitle {
        border-bottom: 2px solid #f1f1f1;
        margin: 0;
        margin-bottom: 20px;
        padding: 0 0 8px 0;
        border-color: #f1f1f1;
        & strong{
            font-size: 24px;
            font-weight: 700;
            z-index: 1;
            padding-bottom: 8px;
            border-bottom: 4px solid;
            border-color: #2b2a2a;
            color: #2b2a2a;
        }
    }
    && .description{
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 1px;
        font-weight: 600;
        color: #696969;
        max-width: 800px;
        text-align: justify; 
    }
`