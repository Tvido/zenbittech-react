import React from 'react'

export const Section = ({ title, children }) => {
  return (
    <section className="">
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}