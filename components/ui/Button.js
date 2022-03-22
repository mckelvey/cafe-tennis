import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  // placeholder
`

const Button = ({ children, disabled, onClick, state }) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    type="button"
    data-state={state}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  state: PropTypes.oneOf(['resting', 'hover', 'active']),
}

Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  state: undefined,
}

export default Button
