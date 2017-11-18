import React, { Component } from 'react'
import BitcoinRate from '../../components/molecules/BitcoinRate'

class BitcoinRateContainer extends Component {
  constructor(props) {
    super(props)
    this.changeRate = this.changeRate.bind(this)
    this.state = { availableRates: [], history: [], stats: {} }
  }

  componentDidMount() {
    return fetch('http://localhost:9000/bitcoins/currencies/')
      .then(response => response.json())
      .then((availableRates) => {
        this.setState({ ...this.state, availableRates })
        return availableRates
      })
  }

  changeRate(currencyCode) {
    console.log(currencyCode)
    return fetch(`http://localhost:9000/bitcoins/rates/${currencyCode}/history/`)
      .then(response => response.json())
      .then(history => this.setState({ ...this.state, history }))
  }

  render() {
    return (
      <BitcoinRate
        availableRates={this.state.availableRates}
        history={this.state.history}
        onChangeRate={this.changeRate}
      />
    )
  }
}

export default BitcoinRateContainer
