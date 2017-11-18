import React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Small from '../../atoms/Small'
import Link from '../../atoms/Link'
import BitcoinRateContainer from '../../../containers/BitcoinRate'

const HomePage = () => {
  return (
    <PageTemplate
      header={null}
      footer={
        <Small transparent centered>
          Made with <span role="img" aria-label="Heart" aria-labelledby="">❤️</span> by <Link href="https://www.mattianatali.it" target="_blank">Mattia Natali</Link> · <Link href="https://www.mattianatali.it" target="_blank">Source Code</Link>
        </Small>
      }
    >
      <BitcoinRateContainer />
    </PageTemplate>
  )
}

export default HomePage
