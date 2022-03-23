import PropTypes from 'prop-types'
import styled from 'styled-components'

import Wavy from './wavy.svg'
import Saturn from './saturn.svg'
import Butterfly from './butterfly.svg'

const StyledButton = styled.button`
  --background-color: #1f1a33;

  justify-self: center;
  margin: 0 auto;
  padding: 0;
  height: 5.6rem;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  background-color: transparent;
  border: none;
  color: #ff974b;
  filter: drop-shadow(0 1.6rem 2.4rem rgba(0, 0, 0, 0.06))
    drop-shadow(0 2rem 0.6rem rgba(0, 0, 0, 0.04))
    drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.04));
  transition: background-color 100ms ease, filter 100ms ease;

  > svg {
    width: 3rem;
    height: 100%;

    &:last-child {
      transform: rotate(180deg);
    }
  }

  &:hover:not([data-state]),
  &[data-state='hover'] {
    --background-color: #25089b;

    filter: drop-shadow(0 1.6rem 2.4rem rgba(0, 0, 0, 0.16))
      drop-shadow(0 0.2rem 0.8rem rgba(0, 0, 0, 0.12))
      drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.16));
  }

  &:active:not([data-state]),
  &[data-state='active'] {
    --background-color: #1a056c;
  }
`

const ButtonContent = styled.span`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: min-content 1fr min-content;
  grid-gap: 1.2rem;
  padding: 0 2rem;
  height: 100%;
  background-color: var(--background-color, #c4c4c4);
  white-space: nowrap;
`

const Button = ({ children, disabled, onClick, state }) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    type="button"
    data-state={state}
  >
    <Wavy />
    <ButtonContent>
      <Saturn />
      {children}
      <Butterfly />
    </ButtonContent>
    <Wavy />
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
