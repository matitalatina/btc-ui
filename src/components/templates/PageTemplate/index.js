// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${palette('background', 0)};
  color: ${palette('foreground', 0)};
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: ${size('maxWidth')};
`

const ContentCentered = Content.extend`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Footer = styled.footer`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const PageTemplate = ({
  header, hero, sponsor, children, footer, contentCentered = false, ...props
}) => {
  return (
    <Wrapper {...props}>
      {header && <Header>{header}</Header>}
      {contentCentered ? <ContentCentered>{children}</ContentCentered> : <Content>{children}</Content>}
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node,
  hero: PropTypes.node,
  sponsor: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
  contentCentered: PropTypes.bool,
}

export default PageTemplate
