import React from 'react'
import { InnerWrapper, StyledP, Wrapper } from './styles'

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper>
      <div className='container'>
        <InnerWrapper className='flexSpaceCenter' style={{ padding: '30px 0' }}>
          <StyledP className='whiteColor font13'>
            © Bellatrix {getCurrentYear()}. Todos los derechos reservados.
          </StyledP>
        </InnerWrapper>
      </div>
    </Wrapper>
  )
}

export default Footer
