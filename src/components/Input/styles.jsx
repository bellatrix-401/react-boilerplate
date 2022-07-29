import styled, { css } from 'styled-components'

export const Error = styled.label`
  text-transform: uppercase;
  font-weight: 600;
  bottom: -16px;
  color: #ed1c4e;
  font-size: 0.55rem;
  right: 20px;
  pointer-events: none;
  position: absolute;
  transition: 0.2s;
  letter-spacing: 1.5px;
`

export const InputContainer = styled.div(
  ({ padding = '0px' }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: ${padding};
    position: relative;
  `
)

export const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  height: 30px;
  padding: 5px 10px;
  transition: box-shadow .15s ease;

  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
`
