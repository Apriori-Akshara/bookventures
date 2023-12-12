import React from 'react'
import styles from '../../styles/Modal/modal.module.css'
import ReactDom from 'react-dom'

export default function LoginModal({ logopen, children , onClose}) {
  if(!logopen) return null
  return ReactDom.createPortal(
    <div className={styles.container}>
      {children}
    </div>,
    document.getElementById('loginportal')
  )
}
