import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard1 from './gallery-card1'
import './setting-screen.css'

const SettingScreen = (props) => {
  return (
    <div className={`setting-screen-container ${props.rootClassName} `}>
      <div className="setting-screen-gallery">
        <GalleryCard1 rootClassName="rootClassName" className=""></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHx3b29kc3xlbnwwfHx8fDE2MjY0NDc1ODg&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName1"
          className=""
        ></GalleryCard1>
        <GalleryCard1
          image_src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHdvb2RzfGVufDB8fHx8MTYyNjQ0NzU3Mw&amp;ixlib=rb-1.2.1&amp;w=1000"
          rootClassName="rootClassName2"
          className=""
        ></GalleryCard1>
      </div>
    </div>
  )
}

SettingScreen.defaultProps = {
  rootClassName: '',
}

SettingScreen.propTypes = {
  rootClassName: PropTypes.string,
}

export default SettingScreen
