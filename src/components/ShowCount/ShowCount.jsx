import React from 'react'
import './ShowCount.css'
const ShowCount = ({ countNum, className }) => {
  return (
    <p className={className}>
      You clicked here {countNum} {countNum === 1 ? 'time' : 'times'}
    </p>
  )
}

export default ShowCount
