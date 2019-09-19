import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../scss/styles.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
