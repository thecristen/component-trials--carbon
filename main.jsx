import ReactDOM from 'react-dom'
import React from 'react'
import BXButton from 'carbon-web-components/es/components-react/button/button'

ReactDOM.render(
  <BXButton kind="primary" className="mbta-button">React button</BXButton>,
  document.getElementById('mbta-button')
)

ReactDOM.render(
  <bx-btn kind="primary">React + Web component button</bx-btn>,
  document.getElementById('mbta-button-2')
)