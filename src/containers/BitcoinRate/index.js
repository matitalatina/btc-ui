import React, { Component } from 'react'
import BitcoinRate from '../../components/molecules/BitcoinRate'
import { HTTP_CORE_ENDPOINT } from '../../config'
import RateUpdateListener from '../../services/rateUpdateListener'

class BitcoinRateContainer extends Component {
  constructor(props) {
    super(props)
    this.changeRate = this.changeRate.bind(this)
    this.onUpdateRateStats = this.onUpdateRateStats.bind(this)
    this.state = { availableRates: [], history: [], stats: {} }
    this.listener = new RateUpdateListener({ onUpdate: this.onUpdateRateStats })
  }

  componentDidMount() {
    return fetch(`${HTTP_CORE_ENDPOINT}/bitcoins/currencies/`)
      .then(response => response.json())
      .then((availableRates) => {
        this.setState({ ...this.state, availableRates })
        return availableRates
      })
  }

  onUpdateRateStats(rateStats) {
    this.setState({ ...this.state, history: [...this.state.history, rateStats.rate], stats: rateStats.stats })
  }

  changeRate(currencyCode) {
    this.listener.listen(currencyCode)
    return fetch(`${HTTP_CORE_ENDPOINT}/bitcoins/rates/${currencyCode}/history/`)
      .then(response => response.json())
      .then(history => this.setState({ ...this.state, history }))
  }

  render() {
    return (
      <BitcoinRate
        availableRates={this.state.availableRates}
        history={this.state.history}
        onChangeRate={this.changeRate}
        stats={this.state.stats}
      />
    )
  }
}

export default BitcoinRateContainer
