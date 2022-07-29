import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`
// background: linear-gradient(87deg,#11cdef,#1171ef)!important;

export const Card = styled.div`
  align-items: center;
  background-color: #ebebeb;
  border-radius: 5px;
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
  display: flex;
  justify-content: center;
  height: 100%;
  margin: auto;
  min-height: 30vh;
  min-width: 400px;
  padding: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 18px;
`

export const LoginContainer = styled.div`
  padding: 26px;
  text-align: center;
  width: 100%;
`

export const LoginText = styled.div`
  padding: 20px;
`

export const Welcome = styled.div`
  text-align: center;
  margin-top: 120px;
  font-size: 20px;
  font-size: 1.625rem;
  color: white;
`
