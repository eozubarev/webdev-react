import React from 'react'
import Nav from '../Header/Nav'

export default function Footer(props) {
  return (
    <footer>
        <h3>{props.siteInfo.site_name}</h3>
        <Nav />
    </footer>
  )
}
