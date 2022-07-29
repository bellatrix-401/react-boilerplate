import React from 'react'
import PropTypes from 'prop-types'
import { Error, InputContainer, InputField, Label } from './styles'

const Input = (props) => {
  return (
    <InputContainer padding={props.padding}>
      {props.label && (
        <Label>{props.label}</Label>
      )}
      <InputField {...props} />
      {props.error && <Error>{props.errorMessage}</Error>}
    </InputContainer>
  )
}

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  padding: PropTypes.string
}

Input.defaultProps = {
  errorMessage: 'Formato incorrecto'
}

export default Input
