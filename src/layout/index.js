/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { DarkModeContext } from "../context/DarkModeContext"
import '../styles/main.scss'

const Layout = ({ children }) => {

  const { darkMode } = useContext(DarkModeContext)

  let themeClass = ''

  if (darkMode) {
    themeClass = 'dark'
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: `theme ${themeClass}`,
        }}
        title='Theodore Ngo'
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
