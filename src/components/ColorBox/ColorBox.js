import React, { useState, useCallback } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { motion, AnimatePresence } from 'framer-motion'
import wait from 'waait'

import './color-box.scss'
import { Link } from 'react-router-dom'

const variants = {
  overlay: {
    hide: { scale: 0.1, zIndex: 0 },
    show: { scale: 20, zIndex: 10, transition: { duration: 0.3 } },
    leave: { opacity: 0 },
  },
  content: {
    hide: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
    leave: { opacity: 0 },
  },
}

const ColorBox = ({ color, name }) => {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    if (!copied) {
      setCopied(true)
      await wait(1000)
      setCopied(false)
    }
  }, [copied])

  return (
    <CopyToClipboard text={color} onCopy={onCopy}>
      <div className="color-box" style={{ background: color }}>
        <AnimatePresence>
          {copied && (
            <motion.div initial="hide" animate="show" exit="leave">
              <motion.div
                className="color-box__overlay"
                style={{ backgroundColor: color }}
                variants={variants.overlay}
              />
              <motion.div
                variants={variants.content}
                className="color-box__overlay-content"
              >
                <h1>Copied!</h1>
                <p>{color}</p>
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
        <Link
          onClick={(e) => e.stopPropagation()}
          to="/"
          className="color-box__see-more"
        >
          More
        </Link>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
