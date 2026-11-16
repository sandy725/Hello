const projects = {
  shopify: [
    { name: 'Niana', url: 'https://niana.co/' },
    { name: 'Aura Decor', url: 'https://auradecor.co.in/' },
    { name: 'Priesters', url: 'https://priesters.com/' },
    { name: 'Riddles Jewelry', url: 'https://www.riddlesjewelry.com/' },
  ],
  mixed: [
    { name: 'Priesters', url: 'https://priesters.com/' },
    { name: 'Sodstar', url: 'https://sodstar.com/' },
    { name: 'PTAC4Less', url: 'https://ptac4less.com/' },
    { name: 'Riddles Jewelry', url: 'https://www.riddlesjewelry.com/' },
  ],
  skincare: [
    { name: 'Greco Dermatology', url: 'https://www.grecodermatology.com/' },
    { name: 'Higher Than Health', url: 'https://www.higherthanhealth.org/' },
    { name: 'Calabasas Dermatology', url: 'https://www.calabasasdermcenter.com/' },
  ],
  wordpress: [
    { name: 'Parlour VT', url: 'https://parlourvt.com/' },
    { name: 'Careforce 1', url: 'https://careforce1.com.au/' },
    { name: 'Sheek Studio', url: 'https://www.sheekstudio.com/' },
    { name: 'Ellas Bubbles', url: 'https://ellasbubbles.com/' },
  ],
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function ContactForm() {
  return (
    <form className="contact-form" action="mailto:hello@sandeepstudio.in" method="post" encType="text/plain">
      <div className="form-row">
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
      </div>
      <div className="form-row">
        <label>Phone<input name="phone" type="tel" placeholder="Your phone number" /></label>
        <label>Project type<select name="project"><option>Shopify ecommerce</option><option>WordPress website</option><option>UI/UX design</option><option>Something else</option></select></label>
      </div>
      <label>Tell me about the project<textarea name="message" required rows={4} placeholder="What are you looking to build?"></textarea></label>
      <button type="submit" className="button button-light">Request a quote <Arrow /></button>
    </form>
  )
}

function ProjectGroup({ number, title, description, items }: { number: string; title: string; description: string; items: { name: string; url: string }[] }) {
  return (
    <article className="project-group">
      <div className="project-heading">
        <span className="eyebrow">{number}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="project-links">
        {items.map((item) => (
          <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="project-link">
            <span>{item.name}</span>
            <Arrow />
          </a>
        ))}
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main>
      <header className="site-header shell">
        <a href="#top" className="brand" aria-label="Sandeep Kumar home">
          <span className="brand-mark" aria-hidden="true"><span>SK</span></span>
          <span>Sandeep Kumar</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let&apos;s talk <Arrow /></a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> Independent web developer · UI/UX designer</p>
          <h1>Digital experiences<br /><em>built to move</em> business.</h1>
          <p className="hero-intro">I&apos;m Sandeep Kumar. I design and develop thoughtful Shopify, WordPress, and custom websites that look sharp, feel effortless, and help brands grow.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">Explore selected work <Arrow /></a>
            <a href="https://linkedin.com/in/sandeep-kumar-5026b527" target="_blank" rel="noreferrer" className="text-link">LinkedIn <Arrow /></a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame"><img src="/images/sandeep-kumar.png" alt="Sandeep Kumar, web developer and UI/UX designer" /></div>
          <span className="portrait-note">Based in India<br />Working globally</span>
        </div>
      </section>

      <section className="marquee" aria-label="Capabilities">
        <div className="marquee-inner">Shopify <span>✳</span> WordPress <span>✳</span> UI / UX <span>✳</span> Front-end <span>✳</span> Strategy <span>✳</span> Shopify <span>✳</span></div>
      </section>

      <section id="about" className="about shell">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="about-content"><p className="display-copy">A reliable partner for <em>clear thinking</em>, clean interfaces, and websites that do their job.</p><p className="body-copy">From the first wireframe to the final line of code, I care about the details that make a digital product feel right. I bring a designer&apos;s eye and a developer&apos;s discipline to every project.</p></div>
      </section>

      <section id="work" className="work shell">
        <div className="section-label"><span>02</span><span>Selected work</span></div>
        <div className="work-intro"><h2>Projects with purpose.</h2><p>Explore a selection of live websites I&apos;ve designed, built, and helped bring to market.</p></div>
        <div className="project-list">
          <ProjectGroup number="01" title="Shopify commerce" description="Conversion-minded storefronts for modern retail brands." items={projects.shopify} />
          <ProjectGroup number="02" title="Mixed ecommerce" description="Flexible ecommerce builds across platforms and categories." items={projects.mixed} />
          <ProjectGroup number="03" title="Skincare & wellness" description="Calm, credible digital homes for healthcare brands." items={projects.skincare} />
          <ProjectGroup number="04" title="WordPress builds" description="Content-rich websites that are easy to own and grow." items={projects.wordpress} />
        </div>
      </section>

      <section id="testimonials" className="testimonials shell">
        <div className="section-label"><span>03</span><span>Client notes</span></div>
        <div className="testimonials-intro"><h2>Good work should<br /><em>feel easy.</em></h2><p>A few things clients tend to value most when we work together.</p></div>
        <div className="testimonial-grid">
          <figure className="testimonial-card"><blockquote>“Sandeep understood what the business needed, not just what the website needed. The whole process felt clear and well-organised.”</blockquote><figcaption><strong>Founder</strong><span>Retail & ecommerce</span></figcaption></figure>
          <figure className="testimonial-card"><blockquote>“The new site feels like us now — calmer, more confident, and much easier for customers to navigate.”</blockquote><figcaption><strong>Marketing lead</strong><span>Health & wellness</span></figcaption></figure>
          <figure className="testimonial-card"><blockquote>“Thoughtful design, clean development, and quick communication. It was easy to trust the details.”</blockquote><figcaption><strong>Business owner</strong><span>Service business</span></figcaption></figure>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="section-label"><span>04</span><span>Start a project</span></div>
        <div className="contact-inner"><div><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2><div className="contact-details"><a href="mailto:hello@sandeepstudio.in">hello@sandeepstudio.in</a><a href="tel:+919815002027">+91 98150 02027</a></div></div><ContactForm /></div>
      </section>

      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Sandeep Kumar</span><span>Web development · UI/UX · Ecommerce</span><a href="https://linkedin.com/in/sandeep-kumar-5026b527" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></footer>
    </main>
  )
}

export const metadata = {
  title: 'Sandeep Kumar — Web Developer & UI/UX Designer',
  description: 'Sandeep Kumar designs and develops thoughtful Shopify, WordPress, and custom websites for ambitious brands.',
}

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#f3f1eb' }

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sandeep Kumar',
  jobTitle: 'Web Developer and UI/UX Designer',
  url: 'https://sandeepstudio.in/',
  sameAs: ['https://linkedin.com/in/sandeep-kumar-5026b527'],
}
