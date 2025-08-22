import React from 'react'
export default function Header(){
  return (
    <header>
      <div className="container nav">
        <a href="#" className="brand" aria-label="Home">
          <div className="logo">AD</div>
          <span>Aurélien Darbellay</span>
        </a>
        <nav>
          <a href="#portfolio">Portfolio</a>
          <a href="mailto:aurelien.darbellay@gmail.com" className="button ghost">Contact</a>
        </nav>
      </div>
    </header>
  )
}
