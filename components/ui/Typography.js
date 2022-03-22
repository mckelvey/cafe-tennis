import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { COLOR_NAMES } from '@util/theme'

const propTypesColor = { color: PropTypes.oneOf(COLOR_NAMES) }

const sharedStyles = css`
  ${props => css`
    margin: 0;
    color: ${props.theme.colors[props.color]};
    font-family: ${props.theme.fontStacks.workSans};
    font-weight: 400;
  `}
`

export const h1Styles = css`
  ${sharedStyles}
`

export const H1 = styled.h1`
  ${h1Styles};
`
H1.propTypes = { ...propTypesColor }
H1.defaultProps = { color: 'black' }

export const h2Styles = css`
  ${sharedStyles}
`

export const H2 = styled.h2`
  ${h2Styles}
`

H2.propTypes = { ...propTypesColor }
H2.defaultProps = { color: 'black' }

export const h3Styles = css`
  ${sharedStyles}
`

export const H3 = styled.h3`
  ${h3Styles}
`

H3.propTypes = { ...propTypesColor }
H3.defaultProps = { color: 'black' }

export const h4Styles = css`
  ${sharedStyles}
`

export const H4 = styled.h4`
  ${h4Styles}
`

H4.propTypes = { ...propTypesColor }
H4.defaultProps = { color: 'black' }

export const bodyStyles = css`
  ${sharedStyles}
`

export const Body = styled.p`
  ${bodyStyles}
`

export const screenReaderTextStyles = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const ScreenReaderText = styled.span`
  ${screenReaderTextStyles}
`
