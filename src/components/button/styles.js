import styled, { css } from "styled-components";

export const Container = styled.button`
    background: #4caf50;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    height: 47px;
    border-radius: 4px;
    border: none;
    width: 249px;
    margin: 10px auto 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:hover{
        background:#5EB762
    }

    ${props => {
        if (props.styles === 'verMais') {
        return `
            width: 249px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            padding: 6px 14px;
            border-radius: 4px;
            background: #fff;
            color: #1f7658;
            border-color: #1f7658;
            margin-top: 0;
            margin: 0 auto 10px;
            &:hover {
                background: #fff;   
                color: #4caf50;
                border-color: #4caf50;
            }
        `}
        if (props.styles === 'remover') {
        return `
            font-size: 12px;
            font-weight: 700;
            margin: 10px auto 5px;
            width: 73px;
            height: 22px;
            border: 1px solid;
            border-radius: 4px;
            background: #cc0e0e;
            color: #ffffff;
            border-color: #000000;
            margin-top: 0;
            &:hover {
                background: #f00;   
                color: #fff;
                border-color: #000;
            }
        `}
    }}
`
