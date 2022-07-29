import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer, ButtonElement } from './styles'

const Button = ({ borderRadius, id, label, onClick, style }) => {
  return (
    <ButtonContainer style={style}>
      <ButtonElement id={id} onClick={onClick} borderRadius={borderRadius}>
        {label}
      </ButtonElement>
    </ButtonContainer>
  )
}

Button.propTypes = {
  borderRadius: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
}

Button.defaultProps = {
  label: 'Button'
}

export default Button
