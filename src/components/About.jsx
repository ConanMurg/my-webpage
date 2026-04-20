import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Analytical researcher<br />
              <span className="gradient-text">turned data engineer</span>
            </h2>
          </div>
        </div>

        <div className="about-content">
          <div className={`about-text animate-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <p>
              <span className="about-highlight">
                I am a PhD researcher at the University of Leicester
              </span>{' '}
              specialising in data science, quantitative modelling, and 
              statistical problem-solving with a strong mathematical foundation.
            </p>
            <p>
              During my collaboration with the{' '}
              <span className="about-highlight">European Space Agency (ESA)</span>, 
              I was responsible for the end-to-end delivery of analytical projects, 
              developing software for data acquisition, and providing technical 
              reports for space missions including the Einstein Probe (launched 2024) 
              and THESEUS.
            </p>
            <p>
              Beyond research, I build full-stack applications and data pipelines for personal use, 
              including my own finance analytics platform and a library management system.
            </p>
          </div>

          <div className={`about-stats animate-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Publications</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Years Research</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
