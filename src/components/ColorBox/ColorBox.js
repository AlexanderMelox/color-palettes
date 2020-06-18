import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './color-box.scss'

const ColorBox = ({ color, name }) => (
  <CopyToClipboard text={color}>
    <div className="color-box" style={{ background: color }}>
      <div className="color-box__copy-container">
        <div className="color-box__content">
          <span>{name}</span>
        </div>
        <button className="color-box__copy-button">Copy</button>
      </div>
      <div className="color-box__see-more">More</div>
    </div>
  </CopyToClipboard>
)

export default ColorBox
