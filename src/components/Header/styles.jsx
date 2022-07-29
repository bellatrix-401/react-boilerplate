import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints } from '../../const'

export const Img = styled.img`
  cursor: pointer;
  height: 100%;
  padding: 0 2%;

  @media screen and (max-width: ${breakpoints.s}) {
    height: 90%
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    height: 50%
  }
`

export const LinkStyled = styled(Link)`
  padding: 10px 15px;
`

export const NavInner = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
`

export const UlWrapper = styled.ul`
  display: flex;
  padding: 0 2%;

  @media (max-width: 760px) {
    display: none;
  }
`

export const Wrapper = styled.nav`
  background-color: #fff;
  left: 0;
  padding: 1.3% 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`
