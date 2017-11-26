import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styled from 'styled-components'
import HistoryChart from '../../atoms/HistoryChart'
import Checkbox from '../../atoms/Checkbox'

const Wrapper = styled.div``
const BitcoinRate = ({ availableRates, history, stats, onChangeRate, currency, historyVisibility, onHistoryVisibilityChange }) => {
  const options = availableRates.map(r => ({ label: r.name, value: r.code }))
  const changeRate = val => onChangeRate(val.value)
  const statistics = stats && stats.avg && (<span>{stats.avg} - {stats.variance} - {stats.min} - {stats.max}</span>)
  let historySection = null
  if (historyVisibility) {
    const historyRender = history.map((h, i) => (
      <li key={i}>{h.rate} - {new Date(h.stamp).toISOString()}</li>
    ))
    historySection = (
      <div>
        <HistoryChart history={history} currency={currency} />
        {historyRender}
      </div>
    )
  }

  return (
    <Wrapper>
      <Select
        options={options}
        onChange={changeRate}
      />
      <Checkbox
        label="Show history"
        isChecked={historyVisibility}
        onCheckChange={onHistoryVisibilityChange}
      />
      {statistics}
      {historySection}
    </Wrapper>
  )
}

BitcoinRate.propTypes = {
  availableRates: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.object.isRequired,
  stats: PropTypes.object,
  onChangeRate: PropTypes.func.isRequired,
  historyVisibility: PropTypes.bool.isRequired,
  onHistoryVisibilityChange: PropTypes.func.isRequired,
}

export default BitcoinRate
