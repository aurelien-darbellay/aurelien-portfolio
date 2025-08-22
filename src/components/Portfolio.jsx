import React from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
export default function Portfolio(){
  return (
    <section className="container" id="portfolio" style={{paddingBottom: 48}}>
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Selected work & experiments</p>
      </div>
      <div className="grid">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
