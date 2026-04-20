import { Code, Database, Wrench, BarChart3, BrainCircuit, Globe } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    name: 'Programming',
    icon: Code,
    skills: ['Python', 'C++', 'C', 'R', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Machine Learning',
    icon: BrainCircuit,
    skills: ['Neural Networks', 'GBM / GLM', 'Random Forest', 'Scikit-learn', 'Statistical Modelling', 'Feature Engineering'],
  },
  {
    name: 'Data Analysis & Visualisation',
    icon: BarChart3,
    skills: ['Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Visualisation', 'Data Cleaning'],
  },
  {
    name: 'Databases & Pipelines',
    icon: Database,
    skills: ['SQL', 'PostgreSQL', 'MySQL', 'ETL Pipelines'],
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    skills: ['React', 'Vite', 'HTML', 'CSS', 'Nginx', 'REST APIs'],
  },
  {
    name: 'DevOps & Tools',
    icon: Wrench,
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'LaTeX'],
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
