import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button'
import { Img, NavInner, Wrapper } from './styles'

const Header = () => {
  const navigate = useNavigate()
  const [y, setY] = useState(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY))
    }
  }, [y])

  const handleClick = () => {
    navigate('/contact')
  }

  const handleClickHome = () => {
    navigate('/')
  }

  return (
    <Wrapper style={y > 100 ? { height: '60px' } : { height: '80px' }}>
      <NavInner className='container'>
        <Img src={logo} alt='logo' onClick={handleClickHome} />
        <Button label='Contacto' onClick={handleClick} style={{ margin: '0px' }} borderRadius='20px' />
      </NavInner>
    </Wrapper>
  )
}

export default Header
