import React from 'react'
import s from './Section.module.css'

export const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}