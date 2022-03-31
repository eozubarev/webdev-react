import React from 'react'

export default function Header() {
  return (
    <nav>
        <li><a className='link__nav' href="/">Main</a></li>
        <li><a className='link__nav' href="/about">About</a></li>
        <li><a className='link__nav' href="/users">Users</a></li>
    </nav>
  )
}
