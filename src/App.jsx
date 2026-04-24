import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Canvas } from '@react-three/fiber'
import SeaComponent from './components/SeaComponent.jsx'
import { OrbitControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Services', 'Project', 'Stack', 'Contact']

  return (
    <nav className={`ah-nav ${scrolled ? 'ah-nav--scrolled' : ''}`}>
      <a href="#hero" className="ah-nav__brand">AH<span className="ah-nav__dot">.</span></a>
      <button className="ah-nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`ah-nav__links ${menuOpen ? 'ah-nav__links--open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
          </li>
        ))}
        <li>
          <a href="mailto:adam@starttalking.io" className="ah-btn ah-btn--sm" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="ah-hero">
      <div className="ah-hero__canvas-wrap">
        <Canvas
          camera={{ position: [1.2, 0.23, 0] }}
          style={{ width: '100%', height: '100%' }}
        >
          <SeaComponent />
        </Canvas>
      </div>
      <div className="ah-hero__content">
        <p className="ah-hero__eyebrow">Senior Full Stack Developer &amp; Acting CTO</p>
        <h1 className="ah-hero__name">Adam Herson</h1>
        <p className="ah-hero__tagline">
          Building scalable products end-to-end — from architecture to deployment.
        </p>
        <div className="ah-hero__cta">
          <a href="#project" className="ah-btn ah-btn--primary">View Featured Project</a>
          <a href="#contact" className="ah-btn ah-btn--ghost">Get In Touch</a>
        </div>
        <div className="ah-hero__badges">
          <span className="ah-badge">React</span>
          <span className="ah-badge">Node.js</span>
          <span className="ah-badge">Solidity</span>
          <span className="ah-badge">MongoDB</span>
          <span className="ah-badge">Polygon</span>
        </div>
      </div>
      <a href="#about" className="ah-hero__scroll" aria-label="Scroll down">
        <span className="ah-hero__scroll-line" />
      </a>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Shipped' },
    { value: '3', label: 'Startups Scaled' },
    { value: '1', label: 'Blockchain Protocol' },
  ]

  return (
    <section id="about" className="ah-section ah-about">
      <div className="ah-container">
        <div className="ah-about__grid">
          <div className="ah-about__text">
            <p className="ah-section__label">About Me</p>
            <h2 className="ah-section__title">The engineer behind the product</h2>
            <p className="ah-about__body">
              I'm a Senior Full Stack Developer who operates at the intersection of engineering
              leadership and hands-on execution. As an Acting CTO for multiple startups, I've
              guided teams from zero to production — owning architecture decisions, sprint
              planning, and code quality simultaneously.
            </p>
            <p className="ah-about__body">
              My current focus is <strong>StartTalking.io</strong>, a B2B corporate mental health
              platform that connects employers with licensed therapists as an employee benefit.
              I led the full-stack build of the prototype and integrated an on-chain therapist
              license verification system using Solidity on Polygon — a first-of-its-kind
              approach in the mental health tech space.
            </p>
            <div className="ah-about__links">
              <a href="https://www.linkedin.com/in/adam-herson-4269b8b" target="_blank" rel="noreferrer" className="ah-btn ah-btn--primary">
                LinkedIn Profile
              </a>
              <a href="#contact" className="ah-btn ah-btn--ghost">Work With Me</a>
            </div>
          </div>
          <div className="ah-about__stats">
            {stats.map(s => (
              <div key={s.label} className="ah-stat-card">
                <span className="ah-stat-card__value">{s.value}</span>
                <span className="ah-stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: '⚙️',
      title: 'Full Stack Development',
      desc: 'End-to-end product engineering with React, Node.js/Express, and MongoDB. From API design to pixel-perfect UI — shipped and production-ready.',
    },
    {
      icon: '⛓️',
      title: 'Blockchain Integration',
      desc: 'Smart contract development in Solidity, deployed on Polygon (EVM-compatible). On-chain verification systems, wallet integrations, and Web3 UX flows.',
    },
    {
      icon: '🏗️',
      title: 'Technical Architecture',
      desc: 'Scalable system design for early-stage startups. Database schema, microservice planning, CI/CD pipelines, and cloud hosting strategy.',
    },
    {
      icon: '🚀',
      title: 'Acting CTO / Tech Lead',
      desc: 'Fractional CTO services for startups needing senior engineering leadership without the full-time overhead. Roadmap, hiring, and execution.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Upgrade',
      desc: 'Transforming functional prototypes into polished, conversion-ready products. Design systems, component libraries, and responsive layouts.',
    },
    {
      icon: '☁️',
      title: 'Hosting & Deployment',
      desc: 'Cloud infrastructure setup, domain configuration, SSL, and continuous deployment. AWS, Vercel, Railway, and more — zero-downtime launches.',
    },
  ]

  return (
    <section id="services" className="ah-section ah-services">
      <div className="ah-container">
        <p className="ah-section__label">What I Do</p>
        <h2 className="ah-section__title">Services</h2>
        <p className="ah-section__sub">
          From greenfield builds to legacy upgrades — I cover the full product lifecycle.
        </p>
        <div className="ah-services__grid">
          {services.map(s => (
            <div key={s.title} className="ah-service-card">
              <span className="ah-service-card__icon">{s.icon}</span>
              <h3 className="ah-service-card__title">{s.title}</h3>
              <p className="ah-service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Featured Project ─────────────────────────────────────────────────────────
function Project() {
  const features = [
    { icon: '🏢', title: 'B2B Employer Portal', desc: 'Employers onboard, manage employee mental health benefits, and track utilization — all in one dashboard.' },
    { icon: '🩺', title: 'Therapist Marketplace', desc: 'Licensed therapists create profiles, set availability, and connect with corporate clients through a verified network.' },
    { icon: '🔗', title: 'On-Chain License Verification', desc: 'Solidity smart contract deployed on Polygon verifies therapist credentials on-chain — tamper-proof and transparent.' },
    { icon: '🔒', title: 'HIPAA-Conscious Architecture', desc: 'Data separation, encrypted sessions, and role-based access control built into the core architecture from day one.' },
  ]

  return (
    <section id="project" className="ah-section ah-project">
      <div className="ah-container">
        <p className="ah-section__label">Featured Work</p>
        <h2 className="ah-section__title">StartTalking.io</h2>
        <p className="ah-section__sub">
          A B2B corporate mental health platform connecting employers with licensed therapists
          as an employee benefit — live, running, and growing.
        </p>

        <div className="ah-project__hero-card">
          <div className="ah-project__hero-text">
            <div className="ah-project__status">
              <span className="ah-dot ah-dot--green" /> Live &amp; Running
            </div>
            <h3>The Problem Worth Solving</h3>
            <p>
              Employee mental health is one of the biggest drivers of workplace productivity loss,
              yet most corporate benefit packages offer outdated, inaccessible solutions. StartTalking.io
              bridges this gap by giving companies a seamless way to offer real, licensed therapy as
              a standard benefit — not an afterthought.
            </p>
            <h3>My Role</h3>
            <p>
              Acting CTO and lead engineer on the prototype. I architected and built the full-stack
              application — React frontend, Node/Express REST API, MongoDB data layer — and designed
              the blockchain verification module from scratch. The smart contract is written in Solidity
              and deployed on the Polygon network, providing immutable proof of therapist licensure.
            </p>
            <div className="ah-project__tags">
              <span className="ah-tag">React</span>
              <span className="ah-tag">Node.js</span>
              <span className="ah-tag">Express</span>
              <span className="ah-tag">MongoDB</span>
              <span className="ah-tag">Solidity</span>
              <span className="ah-tag">Polygon</span>
              <span className="ah-tag">Web3.js</span>
            </div>
          </div>
          <div className="ah-project__hero-visual">
            <div className="ah-mockup">
              <div className="ah-mockup__bar">
                <span /><span /><span />
              </div>
              <div className="ah-mockup__screen">
                <div className="ah-mockup__logo">StartTalking<span>.io</span></div>
                <div className="ah-mockup__tagline">Mental Health as a Benefit</div>
                <div className="ah-mockup__stats">
                  <div className="ah-mockup__stat">
                    <div className="ah-mockup__stat-val">✓</div>
                    <div className="ah-mockup__stat-lbl">On-Chain Verified</div>
                  </div>
                  <div className="ah-mockup__stat">
                    <div className="ah-mockup__stat-val">B2B</div>
                    <div className="ah-mockup__stat-lbl">Enterprise Ready</div>
                  </div>
                  <div className="ah-mockup__stat">
                    <div className="ah-mockup__stat-val">⬡</div>
                    <div className="ah-mockup__stat-lbl">Polygon Network</div>
                  </div>
                </div>
                <div className="ah-mockup__chain">
                  <div className="ah-mockup__block">Block #1</div>
                  <div className="ah-mockup__arrow">→</div>
                  <div className="ah-mockup__block">Block #2</div>
                  <div className="ah-mockup__arrow">→</div>
                  <div className="ah-mockup__block">Block #3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ah-project__features">
          {features.map(f => (
            <div key={f.title} className="ah-feature-card">
              <span className="ah-feature-card__icon">{f.icon}</span>
              <h4 className="ah-feature-card__title">{f.title}</h4>
              <p className="ah-feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
function Stack() {
  const categories = [
    {
      label: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'Bootstrap', 'Three.js / WebGL', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'WebSockets', 'GraphQL'],
    },
    {
      label: 'Database',
      items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'],
    },
    {
      label: 'Blockchain',
      items: ['Solidity', 'Polygon', 'Hardhat', 'Ethers.js', 'Web3.js', 'IPFS'],
    },
    {
      label: 'DevOps & Cloud',
      items: ['AWS', 'Vercel', 'Railway', 'Docker', 'GitHub Actions', 'Nginx'],
    },
    {
      label: 'Tools',
      items: ['Git', 'Figma', 'Postman', 'Jira', 'Linear', 'VS Code'],
    },
  ]

  return (
    <section id="stack" className="ah-section ah-stack">
      <div className="ah-container">
        <p className="ah-section__label">Technology</p>
        <h2 className="ah-section__title">Tech Stack</h2>
        <p className="ah-section__sub">
          A battle-tested toolkit for building and shipping modern web products.
        </p>
        <div className="ah-stack__grid">
          {categories.map(cat => (
            <div key={cat.label} className="ah-stack-card">
              <h3 className="ah-stack-card__label">{cat.label}</h3>
              <ul className="ah-stack-card__list">
                {cat.items.map(item => (
                  <li key={item}><span className="ah-stack-card__bullet">▸</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:adam@starttalking.io?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="ah-section ah-contact">
      <div className="ah-container">
        <p className="ah-section__label">Let's Build</p>
        <h2 className="ah-section__title">Get In Touch</h2>
        <p className="ah-section__sub">
          Have a project that needs a senior engineer or a fractional CTO? Let's talk.
        </p>
        <div className="ah-contact__grid">
          <div className="ah-contact__info">
            <div className="ah-contact__item">
              <span className="ah-contact__icon">💼</span>
              <div>
                <strong>Open To</strong>
                <p>Full-stack projects, blockchain integrations, acting CTO engagements, and UI/UX upgrades</p>
              </div>
            </div>
            <div className="ah-contact__item">
              <span className="ah-contact__icon">⚡</span>
              <div>
                <strong>Response Time</strong>
                <p>Typically within 24 hours</p>
              </div>
            </div>
            <div className="ah-contact__item">
              <span className="ah-contact__icon">🌐</span>
              <div>
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/adam-herson-4269b8b" target="_blank" rel="noreferrer">
                  linkedin.com/in/adam-herson-4269b8b
                </a>
              </div>
            </div>
          </div>
          <form className="ah-contact__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="ah-contact__success">
                ✅ Your email client should have opened. Looking forward to connecting!
              </div>
            ) : (
              <>
                <div className="ah-form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="ah-form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="ah-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="ah-btn ah-btn--primary ah-btn--full">Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="ah-footer">
      <div className="ah-container ah-footer__inner">
        <span className="ah-footer__brand">Adam Herson<span className="ah-nav__dot">.</span></span>
        <span className="ah-footer__copy">© {new Date().getFullYear()} — Senior Full Stack Developer &amp; Acting CTO</span>
        <div className="ah-footer__links">
          <a href="https://www.linkedin.com/in/adam-herson-4269b8b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Project />
      <Stack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
