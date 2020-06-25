import React, { useState, useCallback } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { motion, AnimatePresence } from 'framer-motion'
import wait from 'waait'

import './color-box.scss'

const variants = {
  overlay: {
    hide: { scale: 0.1, zIndex: 0 },
    show: { scale: 20, zIndex: 10, transition: { duration: 0.5 } },
    leave: { opacity: 0 },
  },
  content: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
    leave: { opacity: 0 },
  },
}

const ColorBox = ({ hex, name }) => {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    setCopied(true)
    await wait(1500)
    setCopied(false)
  }, [])

  return (
    <CopyToClipboard text={hex} onCopy={onCopy}>
      <div className="color-box" style={{ background: hex }}>
        <AnimatePresence>
          {copied && (
            <motion.div initial="hide" animate="show" exit="leave">
              <motion.div
                className="color-box__overlay"
                style={{ backgroundColor: hex }}
                variants={variants.overlay}
              />
              <motion.div
                variants={variants.content}
                className="color-box__overlay-content"
              >
                <h1>Copied!</h1>
                <p>{hex}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
}

export default ColorBox
