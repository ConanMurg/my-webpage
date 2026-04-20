import { Award, FileText } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const publications = [
  {
    type: 'paper',
    title: 'Optimising Handheld Instrumentation for Future Astronaut Missions',
    meta: 'In Review: Contributing Author (Journal of Raman Spectroscopy)',
  },
  {
    type: 'paper',
    title: 'Characterisation of sCMOS Sensors for the Wide X-ray Telescope on the Einstein Probe Mission',
    meta: 'In Review: Murgatroyd et al. 2026 (Springer Nature)',
  },
  {
    type: 'paper',
    title: 'Optimising Handheld Instrumentation for Future Astronaut Missions',
    meta: 'Murgatroyd et al. 2024 (16th International GeoRaman Conference Proceedings)',
  },
  {
    type: 'award',
    title: 'Samuel & Rachel May Prize',
    meta: '2022 \u2013 Annual Physics award for outstanding performance in final undergraduate year',
  },
  {
    type: 'award',
    title: 'Will Marshall Prize',
    meta: '2021 \u2013 Annual Physics award for outstanding performance in the Physics Challenge Module',
  },
]

export default function Publications() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="publications" className="section" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Publications & Awards</div>
            <h2 className="section-title">Research output</h2>
          </div>
        </div>

        <div className={`publications-list stagger-children ${isVisible ? 'visible' : ''}`}>
          {publications.map((pub, index) => (
            <div key={index} className="publication-card animate-child">
              <div className={`publication-type publication-type--${pub.type}`}>
                {pub.type === 'paper' ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FileText size={12} /> Publication
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={12} /> Award
                  </span>
                )}
              </div>
              <h3 className="publication-title">{pub.title}</h3>
              <div className="publication-meta">{pub.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
