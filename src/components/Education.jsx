import { useScrollAnimation } from '../hooks/useScrollAnimation'

const education = [
  {
    date: 'Sep 2022 \u2013 Apr 2026',
    title: 'PhD, Physics',
    institution: 'University of Leicester',
    thesis: 'The Development of Combination Handheld Analytical Instruments for Astronaut Exploration.',
    details: [
      'Applied GBM and GLM models in Python and R to large-scale spectral datasets; performed feature engineering and variable importance analysis.',
      'Presented technical findings and reports to international partners, such as ESA, conveying complex scientific data in an actionable manner.',
      'Developed a Python/C++ software suite for data acquisition and instrument control under an ESA contract.',
      'Created Monte Carlo simulations to model and optimise sensor performance, using data-driven insights to guide hardware design.',
      'Technical Stack: SQL, Python (NumPy, Pandas, Scikit-learn), R, Statistical Modelling, Data Cleaning, and Data Visualisation.',
    ],
  },
  {
    date: 'Sep 2018 \u2013 Jun 2022',
    title: 'Master of Physics (MPhys)',
    institution: 'University of Leicester',
    details: [
      'Result: First Class Honours.',
      'Awards: Samuel and Rachel May Prize (2022) — outstanding performance in final year.',
      'Awards: Will Marshall Prize (2021) — outstanding performance in the Physics Challenge Module.',
      'Relevant Modules: Scientific Data Analysis, Statistical Physics, Mathematical Physics.',
    ],
    research: [
      {
        name: 'What Effect Does a Black Hole Have on the Higgs Mechanism in the Standard Model?',
        type: 'Fourth Year Specialist Research Project (Nov 2021 T \u2013 Nov 2022)',
      },
      {
        name: 'Are AGN Accretion Discs Non-Standard?',
        type: 'Fourth Year Literature Review Project (Sep \u2013 Nov 2021)',
      },
      {
        name: 'Thermal Control System for Compact Raman Spectrometer (CIRS)',
        type: 'Student Internship (Jul \u2013 Sep 2021) — NASA Europa Lander',
      },
    ],
  },
  {
    date: 'Sep 2016 \u2013 Jun 2018',
    title: 'International Baccalaureate (IB) Diploma',
    institution: "St Andrew's International School, Nassau, Bahamas",
    details: [
      'Result: 31 Points.',
      'GPA: 4.11 (Penultimate Year).',
      'Subjects: Mathematics, Physics, Chemistry, Business, English, Spanish.',
    ],
  },
]

export default function Education() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="education" className="section section--alt" ref={ref}>
      <div className="container">
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <div className="section-label">Education</div>
            <h2 className="section-title">Academic background</h2>
          </div>
        </div>

        <div className={`timeline stagger-children ${isVisible ? 'visible' : ''}`}>
          {education.map((item, index) => (
            <div key={index} className="timeline-item animate-child">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-institution">{item.institution}</div>

                {item.thesis && (
                  <div className="timeline-thesis">
                    <strong>Thesis:</strong> {item.thesis}
                  </div>
                )}

                <div className="timeline-details" style={{ marginTop: '12px' }}>
                  {item.details.map((detail, i) => (
                    <div key={i} className="timeline-detail">{detail}</div>
                  ))}
                </div>

                {item.research && (
                  <div style={{ marginTop: '16px' }}>
                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      Research Projects
                    </div>
                    {item.research.map((r, i) => (
                      <div key={i} style={{ marginBottom: '8px' }}>
                        <div style={{
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          lineHeight: 1.4,
                        }}>
                          {r.name}
                        </div>
                        <div style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-tertiary)',
                          fontFamily: 'var(--font-mono)',
                        }}>
                          {r.type}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
