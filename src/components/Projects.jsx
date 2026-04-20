import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import projects from '../data/projects'

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <div
      className="project-card"
      style={{ '--project-color': project.color }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="project-card-header">
        <div
          className="project-icon"
          style={{
            background: `${project.color}18`,
            color: project.color,
          }}
        >
          <Icon size={22} />
        </div>
        <div className="project-meta">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-category">{project.category}</div>
        </div>
      </div>

      <div className="project-date">
        <Calendar size={13} />
        {project.date} · {project.location}
      </div>

      <p className="project-description">{project.description}</p>

      <div className={`project-details ${expanded ? 'expanded' : ''}`}>
        <ul>
          {project.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="project-tag"
            style={{
              background: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <button className={`project-expand ${expanded ? 'expanded' : ''}`}>
        {expanded ? 'Show less' : 'View details'}
        <ChevronDown size={14} />
      </button>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Projects</div>
            <h2 className="section-title">
              What I've <span className="gradient-text">built</span>
            </h2>
            <p className="section-subtitle">
              From ESA space mission software to personal full-stack applications — click a card to see more.
            </p>
          </div>
        </div>

        <div className={`projects-grid stagger-children ${isVisible ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div key={project.id} className="animate-child">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
