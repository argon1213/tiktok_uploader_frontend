import React from 'react'

import PropTypes from 'prop-types'

import './avatar-component.css'

const AvatarComponent = (props) => {
  return (
    <div className={`avatar-component-container ${props.rootClassName} `}>
      <div className="avatar-component-container1"></div>
    </div>
  )
}

AvatarComponent.defaultProps = {
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c345a2e1-0964-4688-a7ea-44b1107385b5/5872cd46-35bf-4a10-86a3-af0ee5d16bb7?org_if_sml=17956',
  pastedImage_alt: 'pastedImage',
  rootClassName: '',
}

AvatarComponent.propTypes = {
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AvatarComponent
