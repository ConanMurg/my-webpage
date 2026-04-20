import {
  TrendingUp,
  BookOpen,
  Cpu,
  Telescope,
  Atom,
} from 'lucide-react'

const projects = [
  {
    id: 'finance-platform',
    icon: TrendingUp,
    title: 'Finance & Banking Analytics Platform',
    category: 'Full-Stack Development & Data Engineering',
    location: 'Personal Project',
    date: 'Jan 2026 \u2013 Present',
    description:
      'An end-to-end financial tracking application that synchronises live banking data with a SQL database for automated personal expenditure analysis.',
    details: [
      'Developed a personal end-to-end financial tracking application that synchronised live banking data with a SQL database for automated personal expenditure analysis.',
      'Built a web-based GUI using HTML, CSS, and JavaScript to visualise financial trends and budget variances for monthly spending.',
      'Architected the backend to handle data ingestion securely and performed data manipulation in SQL to ensure data integrity.',
      'Managed the deployment and hosting of the platform via a reverse proxy to allow remote access whilst ensuring consistent uptime for real-time data monitoring.',
    ],
    tags: ['Python', 'SQL', 'JavaScript', 'HTML/CSS', 'Docker', 'Nginx'],
    color: '#10b981',
  },
  {
    id: 'library-tracker',
    icon: BookOpen,
    title: 'Full-Stack Personal Library & Reading Tracker',
    category: 'Data Modelling & Backend Engineering',
    location: 'Personal Project',
    date: 'Feb 2026 \u2013 Present',
    description:
      'A personal web application to log and categorise reading progress, managing a relational database of 100+ unique book records.',
    details: [
      'Built a personal web application to log and categorise reading progress, managing a relational database of 100+ unique book records.',
      'Designed a robust data schema to track multi-state user interactions, including categorisations for completed titles, active reading progress, and future wishlists.',
      'Developed a custom ETL pipeline to ingest and clean raw metadata, ensuring high data quality and consistency for attributes such as genre, author, and reading timestamps.',
      'Managed the deployment of the platform using a reverse proxy for remote access, as well as integrated authentication with Docker to ensure data privacy.',
      'Utilised Git for version control to manage the development lifecycle and developed the backend with a focus on the long-term scalability of the data warehouse.',
    ],
    tags: ['Python', 'SQL', 'Docker', 'ETL', 'Git', 'Authentication'],
    color: '#f59e0b',
  },
  {
    id: 'handheld-instrument',
    icon: Cpu,
    title: 'Handheld Analytical Instrument Software',
    category: 'Embedded Systems & Data Acquisition',
    location: 'University of Leicester — ESA Contract',
    date: 'Sep 2022 \u2013 Apr 2026',
    description:
      'A Python/C++ software package for operating a novel combination handheld instrument for astronauts, developed under a European Space Agency contract.',
    details: [
      'Developed a Python/C++ software suite for data acquisition and instrument control under a European Space Agency (ESA) contract.',
      'Built analytical tools to quantify hardware performance against mission requirements for future astronaut exploration.',
      'Presented technical findings and reports to international partners to convey complex scientific data in an actionable manner.',
      'Applied GBM and GLM models in Python and R to large-scale spectral datasets; performed feature engineering and variable importance analysis.',
    ],
    tags: ['Python', 'C++', 'Raspberry Pi', 'XRF', 'Raman', 'ESA'],
    color: '#6366f1',
  },
  {
    id: 'xray-detectors',
    icon: Telescope,
    title: 'X-ray Detector Characterisation',
    category: 'Data Analysis & Sensor Physics',
    location: 'University of Leicester — ESA / Einstein Probe',
    date: '2023 \u2013 2024',
    description:
      'Characterisation of flight-spare CMOS X-ray detectors for the Einstein Probe mission (launched January 2024) and ESA\'s proposed THESEUS mission.',
    details: [
      'Characterised flight-spare CMOS X-ray detectors from the Einstein Probe (EP) mission, successfully launched in January 2024.',
      'Developed software for X-ray event extraction and analysis pipelines for next-generation prototype sensors.',
      'Contributed to the characterisation pipeline for ESA\'s proposed THESEUS mission CMOS sensors.',
    ],
    tags: ['Python', 'CMOS', 'X-ray', 'Data Analysis', 'ESA', 'THESEUS'],
    color: '#ec4899',
  },
  {
    id: 'monte-carlo-xrf',
    icon: Atom,
    title: 'Monte Carlo XRF Simulation',
    category: 'Computational Physics & Optimisation',
    location: 'University of Leicester',
    date: '2023 \u2013 2025',
    description:
      'A Monte Carlo simulation in C++ to model and optimise the performance of X-ray Fluorescence (XRF) spectrometers for planetary exploration.',
    details: [
      'Created Monte Carlo simulations to model and optimise sensor performance for XRF spectrometers.',
      'Used data-driven insights to guide hardware design decisions and experimental strategy.',
      'Optimised simulation parameters to match laboratory-measured spectra and improve instrument sensitivity.',
    ],
    tags: ['C++', 'Monte Carlo', 'XRF', 'Simulation', 'Optimisation'],
    color: '#14b8a6',
  },
]

export default projects
