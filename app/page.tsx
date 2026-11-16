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
          <h1>Good design gets attention.<br /><em>Great websites get results.</em></h1>
          <p className="hero-intro">I help ambitious brands turn their digital presence into their biggest business advantage.</p>
          <p className="hero-intro">Custom Shopify stores, WordPress websites, and thoughtful digital experiences designed with purpose and built for performance.</p>
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
  <a className="whatsapp-float" href="https://wa.me/919815002027" target="_blank" rel="noopener noreferrer" aria-label="Chat with Sandeep Kumar on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.47-8.42ZM12.1 21.75h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.23c0-5.47 4.46-9.93 9.94-9.93a9.87 9.87 0 0 1 7.03 2.91 9.88 9.88 0 0 1 2.9 7.04c0 5.48-4.46 9.93-9.95 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z"/></svg>
  </a>
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
