import styled, { css } from 'styled-components'

export const ButtonContainer = styled.div`
  margin-top: 24px;
  text-align: center;
`

export const ButtonElement = styled.button(
  ({ borderRadius = '0.375rem' }) => css`
    color: #fff;
    cursor: pointer;
    background-color: #595095;
    border: 1px solid #595095;
    border-radius: ${borderRadius};
    font-weight: 800;
    margin: 14px;
    padding: 10px 30px;
    position: relative;
    text-transform: none;
    transition: all 0.15s ease;
    letter-spacing: 0.025em;
    font-size: .875rem;
    will-change: transform;
  `
)
