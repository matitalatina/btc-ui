import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styled from 'styled-components'

const Wrapper = styled.div``
const BitcoinRate = ({ availableRates, history, stats, onChangeRate }) => {
  const options = availableRates.map(r => ({ label: r.name, value: r.code }))
  const historyRender = history.map((h, i) => (
    <li key={i}>{h.rate} - {new Date(h.stamp).toISOString()}</li>
  ))
  const changeRate = val => onChangeRate(val.value)
  return (
    <Wrapper>
      <Select
        options={options}
        onChange={changeRate}
      />
      {historyRender}
    </Wrapper>
  )
}

BitcoinRate.propTypes = {
  availableRates: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.arrayOf(PropTypes.object),
  stats: PropTypes.object,
  onChangeRate: PropTypes.func,
}

export default BitcoinRate
