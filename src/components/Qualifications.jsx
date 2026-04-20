import { Award, Calendar, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const qualifications = [
  {
    institution: 'Microsoft / LinkedIn',
    date: ' Apr 2026          ',
    title: 'Career Essentials in Data Analysis',
    location: ' Virtual',
    description: 'Certification to enhance data analysis skill set. Skills covered include: data analysis, data visualisation, and data analytics with Excel, Power BI, and SQL.',
  },
  {
    institution: 'HarvardX / EdX',
    date: ' Mar 2024          ',
    title: 'CS50x: Introduction to Computer Science',
    location: ' Virtual',
    description: '11-week course to enhance computer science understanding and improve programming skill set. Languages covered include: Python, SQL, C, and JavaScript plus HTML & CSS.',
  }
]

export default function Qualifications() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="qualifications" className="section" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Certifications</div>
            <h2 className="section-title">Qualifications</h2>
          </div>
        </div>

        <div className={`projects-grid stagger-children ${isVisible ? 'visible' : ''}`}>
          {qualifications.map((qual, index) => (
            <div key={index} className="project-card animate-child">
              <div className="project-card-header">
                <div>
                  <h3 className="project-title">{qual.title}</h3>
                  <div className="project-category" style={{ marginTop: '8px' }}>
                    <Award size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    {qual.institution}
                  </div>
                </div>
              </div>
              
              <div className="project-meta qual-meta">
                <span className="project-meta-item">
                  <Calendar size={14} />
                  {qual.date}
                </span>
                <span className="project-meta-item">
                  <MapPin size={14} />
                  {qual.location}
                </span>
              </div>
              
              <p className="project-description">{qual.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}