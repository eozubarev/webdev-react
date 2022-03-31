import React from 'react'
import Nav from './Nav'

export default function Header(props) {
  return (
    <header>
        <h1>{props.siteInfo.site_name}</h1>
        <h2>{props.siteInfo.site_title}</h2>
        <Nav nav={props.siteInfo.nav}/>
    </header>
  )
}
