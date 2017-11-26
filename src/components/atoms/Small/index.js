import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Small = styled.small`
  font-family: ${font('primary')};
  color: ${props => props.reverse ? palette('background', 0) : palette('foreground', 0)};
  opacity: ${props => props.transparent ? 0.4 : 1};
  text-align: ${props => props.centered ? 'center' : 'auto'};
  font-size: 0.6rem;

  &:hover {
    opacity: 1;
  }
`

Small.propTypes = {
  reverse: PropTypes.bool,
  transparent: PropTypes.bool,
  centered: PropTypes.bool,
}

export default Small
