import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`

const Public = ({ children }) => {
  return <Layout>{children}</Layout>
}

Public.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Public
