import React from 'react'

import PropTypes from 'prop-types'

import './status-component.css'

const StatusComponent = (props) => {
  return (
    <div className={`status-component-container ${props.rootClassName} `}>
      <div className="status-component-container1">
        <span className="status-component-title">{props.text}</span>
        <span className="">{props.text1}</span>
      </div>
    </div>
  )
}

StatusComponent.defaultProps = {
  rootClassName: '',
  text1: 'Text',
  text: 'Text',
}

StatusComponent.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default StatusComponent
