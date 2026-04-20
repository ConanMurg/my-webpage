import { Code, Database, Wrench, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    skills: ['Python', 'C++', 'C', 'R', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Data & Analytics',
    icon: BarChart3,
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Power BI', 'Excel', 'Data Visualisation', 'Statistical Modelling', 'GBM / GLM'],
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'Docker', 'VS Code', 'LaTeX', 'Linux', 'Nginx', 'Google Workspace'],
  },
  {
    name: 'Databases & Engineering',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'ETL Pipelines', 'Data Cleaning', 'Feature Engineering', 'REST APIs'],
  },
]

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="section section--alt" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Skills</div>
            <h2 className="section-title">Technical expertise</h2>
            <p className="section-subtitle">
              A combination of scientific computing, data engineering, and modern development tools.
            </p>
          </div>
        </div>

        <div className={`skills-categories stagger-children ${isVisible ? 'visible' : ''}`}>
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.name} className="skill-category animate-child">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="skill-category-name">{category.name}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
