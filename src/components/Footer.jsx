import React from 'react'
export default function Footer(){
  return (
    <footer>
      <div className="container credits">
        <span>© {new Date().getFullYear()} Aurélien Darbellay</span>
        <span>
          <a href="mailto:aurelien.darbellay@gmail.com">aurelien.darbellay@gmail.com</a> ·{" "}
          <a href="https://www.linkedin.com/in/aurelien-darbellay/" target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
          <a href="https://github.com/aurelien-darbellay" target="_blank" rel="noreferrer">GitHub</a>
        </span>
      </div>
    </footer>
  )
}
