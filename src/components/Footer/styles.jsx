import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Img = styled.img`
  width: 50px
`

export const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const LinkStyled = styled(Link)`
  padding: 10px 15px;
`

export const StyledP = styled.p`
  color: #7f7f7f;
  font-size: 14px;
  margin: 0;
  line-height: 18px;

  @media (max-width: 550px) {
    margin: 20px 0;
  }
`

export const Wrapper = styled.div`
  background: #f7f7f7;
  border-top: 1px solid #e1e1e1;
  margin-top: auto;
  width: 100%;
`
