import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styled from 'styled-components'
import HistoryChart from '../../atoms/HistoryChart'

const Wrapper = styled.div``
const BitcoinRate = ({ availableRates, history, stats, onChangeRate, currency }) => {
  const options = availableRates.map(r => ({ label: r.name, value: r.code }))
  const historyRender = history.map((h, i) => (
    <li key={i}>{h.rate} - {new Date(h.stamp).toISOString()}</li>
  ))
  const changeRate = val => onChangeRate(val.value)
  const statistics = stats && stats.avg && (<span>{stats.avg} - {stats.variance} - {stats.min} - {stats.max}</span>)
  return (
    <Wrapper>
      <Select
        options={options}
        onChange={changeRate}
      />
      <HistoryChart history={history} currency={currency} />
      {statistics}
      {historyRender}
    </Wrapper>
  )
}

BitcoinRate.propTypes = {
  availableRates: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.object.isRequired,
  stats: PropTypes.object,
  onChangeRate: PropTypes.func.isRequired,
}

export default BitcoinRate
