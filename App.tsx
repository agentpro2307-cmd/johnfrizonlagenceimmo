import React, { useCallback, useEffect, useRef, useState } from 'react';
import { properties, soldProperties, testimonials } from './data';
import FormModal from './FormModal';
import './styles.css';

const asset = (name: string) => `${import.meta.env.BASE_URL}${name.replace(/^\//, '')}`;
const google = 'https://share.google/W88xH5Ia5z72cMdV1';
const whatsapp = 'https://wa.me/33634162716?text=Bonjour%20John%2C%20j%E2%80%99ai%20un%20projet%20immobilier%20dans%20le%20Pays%20de%20Gex.';
const socials = [
  ['Instagram', 'https://www.instagram.com/john_lagence_immo'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=61578031168900'],
  ['LinkedIn', 'https://www.linkedin.com/in/john-frizon-l%E2%80%99agence-immo-8a749a2b6'],
];
type FormKind = 'short' | 'qualifying' | 'estimation';
const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;
const Tag = ({ children }: { children: React.ReactNode }) => <span className="eyebrow"><i />{children}</span>;
function Icon({ kind }: { kind: 'house' | 'key' | 'pin' | 'camera' | 'chat' }) {
  const paths = {
    house: 'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-8H9v8H4a1 1 0 0 1-1-1Z',
    key: 'M14 3a7 7 0 0 0-6 10L2 19v3h4v-3h3v-3l2-2a7 7 0 1 0 3-11Zm3 4h.01',
    pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    camera: 'M3 6h4l2-3h6l2 3h4v15H3ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
    chat: 'M21 11a9 9 0 0 1-9 9H7l-5 3 2-7a9 9 0 1 1 17-5Z',
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}
function Carousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const clean = images.filter(Boolean);
  const move = (by: number) => setIndex(v => (v + by + clean.length) % clean.length);
  return <div className="photo-carousel" onTouchStart={e => { startX.current = e.touches[0].clientX; }} onTouchEnd={e => { if (startX.current !== null && Math.abs(e.changedTouches[0].clientX - startX.current) > 45) move(e.changedTouches[0].clientX < startX.current ? 1 : -1); startX.current = null; }}>
    <img src={asset(clean[index])} alt={`${title} — photo ${index + 1}`} loading="lazy" />
    {clean.length > 1 && <>
      <button className="photo-prev" onClick={() => move(-1)} aria-label={`Photo précédente — ${title}`}>‹</button>
      <button className="photo-next" onClick={() => move(1)} aria-label={`Photo suivante — ${title}`}>›</button>
      <div className="photo-dots">{clean.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={i === index ? 'selected' : ''} aria-label={`Photo ${i + 1} — ${title}`} aria-current={i === index ? 'true' : undefined} />)}</div>
      <span className="photo-count">{index + 1} / {clean.length}</span>
    </>}
  </div>;
}
const delay = (d: number) => d === 1 ? '1 jour' : d === 7 ? '1 semaine' : d < 14 ? `${d} jours` : d <= 56 ? `${Math.round(d / 7)} semaines` : `${Math.round(d / 30)} mois`;
function App() {
  const [form, setForm] = useState<FormKind | null>(null);
  const closeForm = useCallback(() => setForm(null), []);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [type, setType] = useState('');
  const [city, setCity] = useState('');
  const [expandedSold, setExpandedSold] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);
  const reviewRail = useRef<HTMLDivElement>(null);
  const [reviewPaused, setReviewPaused] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close);
  }, []);
  useEffect(() => {
    if (reviewPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      const el = reviewRail.current; if (!el) return;
      el.scrollTo({ left: el.scrollLeft + el.clientWidth >= el.scrollWidth - 5 ? 0 : el.scrollLeft + 344, behavior: 'smooth' });
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reviewPaused]);
  const openForm = (kind: FormKind) => { setMenu(false); setForm(kind); };
  const visible = properties.filter(p => (!type || p.type === type) && (!city || p.location === city));
  const sold = expandedSold ? soldProperties : soldProperties.slice(0, 4);
  const nav = [['Accueil', '#top'], ['À propos', '#faisons-connaissance'], ['Nos biens', '#nos-biens'], ['Biens vendus', '#biens-vendus'], ['Services', '#services'], ['Contact', '#contact']];
  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className={`site-header ${scrolled || menu ? 'solid' : ''}`}>
      <a className="brand" href="#top" aria-label="John Frizon — Accueil"><img src={asset('images/LogoAgenceImmoWhite.png')} alt="L’agence immo" /><span>John Frizon<small>L’AGENCE IMMO</small></span></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{nav.map(([name, href]) => <a href={href} key={href}>{name}</a>)}</nav>
      <button className="pill header-cta" onClick={() => openForm('estimation')}>Estimation offerte <Arrow /></button>
      <button className="menu-toggle" aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}>{menu ? '✕' : '☰'}</button>
      {menu && <nav id="mobile-menu" className="mobile-menu" aria-label="Navigation mobile">{nav.map(([name, href]) => <a href={href} key={href} onClick={() => setMenu(false)}>{name}<span>↗</span></a>)}<button className="pill" onClick={() => openForm('estimation')}>Estimation offerte <Arrow /></button></nav>}
    </header>
    <main id="main">
      <section id="top" className="hero">
        <img className="hero-background" src={asset('images/ChatGPT Image 20 mars 2026, 01_37_22moi bleu pro.jpg')} alt="Intérieur lumineux d’une maison du Pays de Gex" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <Tag>IMMOBILIER · PAYS DE GEX</Tag>
          <h1>Vendez votre bien dans le<br className="desktop-break" /> Pays de Gex<br /><em>au meilleur prix</em></h1>
          <p className="hero-intro">Expertise locale, photos professionnelles et diffusion ciblée.<br className="desktop-break" /> Une stratégie sur mesure pour votre projet immobilier.</p>
          <div className="project-panel">
            <h2>Quel est votre projet immobilier ?</h2><p>Parlons de ce qui compte pour vous.</p>
            <div className="project-options">
              <button onClick={() => openForm('estimation')}><span className="project-icon"><Icon kind="house" /></span><span className="option-arrow">↗</span><strong>Faire estimer mon bien</strong><small>Estimation offerte · accompagnement personnalisé</small></button>
              <a href="#nos-biens"><span className="project-icon"><Icon kind="key" /></span><span className="option-arrow">↗</span><strong>Rechercher un bien</strong><small>Découvrez les maisons et appartements disponibles</small></a>
            </div>
          </div>
        </div>
      </section>
      <section id="faisons-connaissance" className="section about-section">
        <div className="container about-panel">
          <div className="portrait"><img src={asset('images/john-frizon-portrait.jpg')} alt="John Frizon, votre conseiller immobilier" loading="lazy" /><a className="portrait-badge" href={google} target="_blank" rel="noreferrer">★ Avis clients sur Google</a><div className="portrait-caption"><h3>John Frizon</h3><p>Agent commercial indépendant<br />L’agence immo · Pays de Gex</p></div></div>
          <div className="about-copy"><Tag>JOHN FRIZON · L’AGENCE IMMO</Tag><h2>Votre vente mérite<br /><em>un vrai engagement.</em></h2><p className="lead">Un projet immobilier ne se résume pas à une annonce.<br />Il faut comprendre votre situation, préparer et agir.</p><p>Pendant cinq ans, le coaching sportif m’a appris à transformer un objectif en actions concrètes. Mon parcours en prévoyance et en gestion de patrimoine a renforcé cette conviction : un bon conseil commence par une vraie écoute.</p><p>Aujourd’hui, j’applique cette méthode à l’immobilier dans le Pays de Gex : un prix argumenté, des images qui révèlent votre bien et une communication active. Je vous explique mes choix, vous tiens informé et reste disponible quand une décision se présente.</p>
            <div className="about-values"><div><em>Stratégie</em><span>Un plan adapté à votre projet</span></div><div><em>Impact</em><span>Une mise en valeur soignée</span></div></div>
            {bioOpen && <div className="bio-details" id="bio-details"><p>Mon expérience de coach m’a appris à écouter, à construire un plan et à accompagner chaque personne jusqu’à son objectif. Dans l’immobilier, cette approche prend tout son sens : comprendre votre situation, défendre vos intérêts et vous aider à décider avec confiance.</p><p>Photos professionnelles, vidéos immersives, visite virtuelle et communication sur les réseaux sociaux : chaque bien bénéficie d’une présentation adaptée à ses atouts.</p></div>}
            <div className="button-row"><button className="pill" onClick={() => setBioOpen(!bioOpen)} aria-expanded={bioOpen} aria-controls="bio-details">{bioOpen ? 'Réduire' : 'Découvrir mon parcours'} <Arrow /></button><a className="pill" href="#contact">Me contacter <Arrow /></a></div>
          </div>
        </div>
      </section>
      <section id="avis" className="section reviews-section">
        <div className="container"><div className="section-heading"><div><Tag>AVIS CLIENTS</Tag><h2>Après les clés, leurs mots.</h2></div><p>Disponibilité, conseils, suivi : mes clients racontent ce qu’ils ont retenu de notre travail ensemble.</p></div>
          <div className="review-banner"><img src={asset('images/peron3.jpg')} alt="Une propriété accompagnée par L’agence immo" loading="lazy" /><div><span className="stars" aria-hidden="true">★★★★★</span><h3>Comment ça se passe<br /><em>avec moi ? Ils racontent.</em></h3><p>Leurs témoignages vous donnent un aperçu concret de mon accompagnement.</p><a className="pill" href={google} target="_blank" rel="noreferrer">Consulter leurs témoignages <Arrow /></a></div></div>
          <div className="rail-controls"><span>Leurs mots, leurs expériences</span><div><button onClick={() => setReviewPaused(!reviewPaused)} aria-label={reviewPaused ? 'Reprendre le défilement des avis' : 'Mettre le défilement des avis en pause'}>{reviewPaused ? '▶' : 'Ⅱ'}</button><button aria-label="Avis précédents" onClick={() => { setReviewPaused(true); reviewRail.current?.scrollBy({ left: -344, behavior: 'smooth' }); }}>←</button><button aria-label="Avis suivants" onClick={() => { setReviewPaused(true); reviewRail.current?.scrollBy({ left: 344, behavior: 'smooth' }); }}>→</button></div></div>
        </div>
        <div className="review-rail" ref={reviewRail} onFocusCapture={() => setReviewPaused(true)}>{testimonials.map(t => <article className="review-card" key={t.id}><span className="stars" aria-label={`${t.rating} étoiles sur 5`}>★★★★★</span><span className="review-label">AVIS CLIENT</span>{t.quote ? <blockquote>« {t.quote} »</blockquote> : <p className="rating-only">Une note de 5 étoiles.</p>}<div className="review-author"><strong>{t.author}</strong><span>{t.role}</span></div></article>)}</div>
      </section>
      <section id="nos-biens" className="section properties-section"><div className="container">
        <div className="section-heading"><div><Tag>NOTRE SÉLECTION</Tag><h2>Un lieu à vous.<br /><em>Une nouvelle histoire.</em></h2></div><p>Découvrez les biens actuellement proposés à la vente dans le Pays de Gex et ses environs.</p></div>
        <div className="filters"><label>Type de bien<select value={type} onChange={e => setType(e.target.value)}><option value="">Tous les types</option>{[...new Set(properties.map(p => p.type))].map(v => <option key={v}>{v}</option>)}</select></label><label>Localisation<select value={city} onChange={e => setCity(e.target.value)}><option value="">Toutes les communes</option>{[...new Set(properties.map(p => p.location))].map(v => <option key={v}>{v}</option>)}</select></label><span className="result-count" aria-live="polite">{visible.length} bien{visible.length > 1 ? 's' : ''}</span>{(type || city) && <button className="text-button" onClick={() => { setType(''); setCity(''); }}>Tout afficher</button>}</div>
        <div className="property-grid">{visible.map(p => <a className="property-card" href={p.url} target="_blank" rel="noreferrer" key={p.id}><div className="property-image"><img src={asset(p.imageUrl)} alt={p.title} loading="lazy" /><div className="badges">{p.badges?.map(b => <span key={b}>{b}</span>)}</div><span className="card-arrow">↗</span></div><div className="property-info"><span className="property-location"><Icon kind="pin" />{p.location}</span><h3>{p.title}</h3><div className="property-bottom"><strong>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p.price)}</strong><span>{p.sqft} m² hab.</span></div></div></a>)}</div>
        {!visible.length && <div className="empty-state"><h3>Aucun bien ne correspond à ces critères.</h3><p>Confiez-moi votre recherche pour être accompagné.</p><button className="pill dark" onClick={() => openForm('qualifying')}>Décrire ma recherche <Arrow /></button></div>}
        <div className="section-bottom"><p>Vous n’avez pas encore trouvé votre prochain chez-vous ?</p><button className="pill dark" onClick={() => openForm('qualifying')}>Parlons de votre recherche <Arrow /></button></div>
      </div></section>
      <section id="biens-vendus" className="section sold-section"><div className="container"><div className="section-heading"><div><Tag>PROJETS CONCRÉTISÉS</Tag><h2>Des biens vendus.<br /><em>Des projets qui avancent.</em></h2></div><p>Maisons, appartements et chalets : quelques ventes accompagnées dans le Pays de Gex et ses environs.</p></div>
        <div className="sold-grid">{sold.map(p => <article className="sold-card" key={p.id}><div className="sold-visual"><Carousel images={p.images} title={p.title} /><div className="badges"><span className="sold-badge">Vendu</span>{p.exclusivite && <span>Exclusivité</span>}</div></div><div className="sold-info"><span className="property-location"><Icon kind="pin" />{p.commune}</span><h3>{p.title}</h3>{typeof p.soldInDays === 'number' && <p>Délai : <strong>{delay(p.soldInDays)}</strong></p>}</div></article>)}</div>
        <div className="section-bottom"><button className="pill" onClick={() => setExpandedSold(!expandedSold)} aria-expanded={expandedSold}>{expandedSold ? 'Voir moins de ventes' : 'Découvrir toutes les ventes'} <Arrow /></button></div>
      </div></section>
      <section id="services" className="section services-section"><div className="container"><div className="section-heading"><div><Tag>VOTRE PROJET, MA MÉTHODE</Tag><h2>Préparer. Présenter.<br /><em>Faire avancer la vente.</em></h2></div><p>De la première estimation à la signature, une stratégie claire et un interlocuteur engagé à vos côtés.</p></div><div className="service-grid">
        <article><span className="service-number">01</span><Icon kind="pin" /><h3>Expertise locale</h3><p>Une analyse des biens comparables, de votre secteur et des attentes des acquéreurs pour positionner votre bien avec justesse.</p></article>
        <article><span className="service-number">02</span><Icon kind="camera" /><h3>Mise en valeur</h3><p>Photos professionnelles, vidéos immersives, visite virtuelle selon le bien et diffusion ciblée sur les portails et les réseaux sociaux.</p></article>
        <article><span className="service-number">03</span><Icon kind="chat" /><h3>Suivi personnalisé</h3><p>Qualification des acquéreurs, retours de visite et accompagnement jusqu’à la signature. Vous savez où en est votre projet.</p></article>
        </div><div className="social-strip"><span>RETROUVEZ MES BIENS ET MES CONSEILS</span>{socials.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n} ↗</a>)}</div></div></section>
      <section className="distribution-section" aria-labelledby="distribution-title"><img className="distribution-background" src={asset('images/peron3.jpg')} alt="" loading="lazy" /><div className="container distribution-content"><Tag>LA COMMUNICATION FAIT PARTIE DU TRAVAIL</Tag><h2 id="distribution-title">Votre bien a des atouts.<br /><em>Je les fais connaître.</em></h2><p>Je réalise les photos et les vidéos pour donner envie de découvrir votre bien. Puis j’adapte la présentation à chaque support : une annonce détaillée pour les recherches actives, des publications et des formats courts pour élargir son audience.</p><div className="distribution-channels"><a href="https://www.leboncoin.fr/" target="_blank" rel="noreferrer" aria-label="leboncoin"><img src={asset('images/logos/leboncoin.svg')} alt="leboncoin" loading="lazy" /></a><a href="https://www.seloger.com/" target="_blank" rel="noreferrer" aria-label="SeLoger"><img src={asset('images/logos/seloger.svg')} alt="SeLoger" loading="lazy" /></a><a href="https://www.bienici.com/" target="_blank" rel="noreferrer" aria-label="Bien’ici"><img src={asset('images/logos/bienici.svg')} alt="Bien’ici" loading="lazy" /></a><a href="https://immobilier.lefigaro.fr/" target="_blank" rel="noreferrer" aria-label="Figaro Immobilier"><img src={asset('images/logos/figaro-immobilier.png')} alt="Figaro Immobilier" loading="lazy" /></a></div><p className="distribution-note">PHOTOS · VIDÉOS · ANNONCES · RÉSEAUX SOCIAUX</p><button className="pill" onClick={() => openForm('estimation')}>Préparer la vente de mon bien <Arrow /></button></div></section>
      <section id="contact" className="section contact-section"><div className="container contact-panel"><div className="contact-copy"><Tag>PARLONS-EN</Tag><h2>Un projet immobilier ?<br /><em>Rencontrons-nous.</em></h2><p>Vous souhaitez vendre, acheter ou connaître la valeur de votre bien ? Échangeons sur votre projet dans le Pays de Gex.</p><a className="contact-phone" href="tel:+33634162716">06 34 16 27 16</a><a className="contact-email" href="mailto:jfrizon@lagenceimmo.com">jfrizon@lagenceimmo.com</a><div className="button-row"><a className="pill" href={whatsapp} target="_blank" rel="noreferrer">Discuter sur WhatsApp <Arrow /></a></div></div><ContactForm /></div></section>
      <section className="section faq-section"><div className="container faq-layout"><div><Tag>QUESTIONS FRÉQUENTES</Tag><h2>Avançons<br /><em>en confiance.</em></h2><a className="pill" href="#contact">Me contacter <Arrow /></a></div><div className="faq-list">{[
        ['Comment se déroule une estimation ?', 'Nous échangeons sur votre projet, puis j’analyse les caractéristiques de votre bien et les ventes comparables du secteur. Je vous présente une estimation argumentée et une stratégie de mise en vente adaptée.'],
        ['Comment mon bien sera-t-il présenté ?', 'La présentation associe photos professionnelles, annonce détaillée et communication adaptée. Des vidéos et une visite virtuelle peuvent compléter la mise en valeur selon le bien.'],
        ['Comment suis-je informé pendant la vente ?', 'Je reste votre interlocuteur et vous transmets les retours de visite. Nous faisons le point sur les demandes, les offres et les ajustements éventuels de la stratégie.'],
        ['Puis-je vous confier ma recherche ?', 'Oui. Présentez-moi votre budget, votre secteur et vos critères via le formulaire de recherche. Nous pourrons préciser ensemble votre projet.'],
      ].map(([q, a], i) => <details key={q} open={i === 0 ? true : undefined}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#top"><img src={asset('images/LogoAgenceImmoWhite.png')} alt="L’agence immo" /><span>John Frizon<small>L’AGENCE IMMO</small></span></a><p>Transaction, estimation et valorisation immobilière.<br />Un accompagnement personnel dans le Pays de Gex et ses environs.</p><div className="footer-socials">{socials.map(([n, u]) => <a href={u} key={n} target="_blank" rel="noreferrer">{n} ↗</a>)}</div></div><div><h3>DÉCOUVRIR</h3>{nav.slice(1).map(([n, h]) => <a href={h} key={h}>{n}</a>)}</div><div><h3>VOTRE PROJET</h3><button onClick={() => openForm('estimation')}>Estimer mon bien</button><button onClick={() => openForm('qualifying')}>Confier ma recherche</button><a href={google} target="_blank" rel="noreferrer">Avis clients Google</a></div><div><h3>CONTACT</h3><a href="tel:+33634162716">06 34 16 27 16</a><a href="mailto:jfrizon@lagenceimmo.com">jfrizon@lagenceimmo.com</a><p>Agent commercial indépendant<br />Entreprise individuelle</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} John Frizon · L’agence immo</span><a href={asset('politique-confidentialite.html')}>Politique de confidentialité</a></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contacter John Frizon sur WhatsApp"><Icon kind="chat" /></a>
    <FormModal isOpen={form !== null} onClose={closeForm} type={form || 'short'} />
  </>;
}
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; setStatus('sending');
    const data = new FormData(form); data.set('_subject', 'Contact depuis le site John Frizon');
    try { const res = await fetch('https://formspree.io/f/xykdkwwz', { method: 'POST', body: data, headers: { Accept: 'application/json' } }); if (!res.ok) throw new Error(); setStatus('success'); form.reset(); } catch { setStatus('error'); }
  }
  return <form className="contact-form" onSubmit={submit}><h3>Faites-moi part de votre projet</h3><div className="form-grid"><label>Nom *<input name="name" autoComplete="name" required /></label><label>Email *<input name="email" type="email" autoComplete="email" required /></label></div><div className="form-grid"><label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label><label>Votre projet<select name="project"><option>Vendre mon bien</option><option>Acheter un bien</option><option>Faire estimer mon bien</option><option>Autre demande</option></select></label></div><label>Message *<textarea name="message" rows={4} required /></label><p className="privacy-note">Ces informations servent à répondre à votre demande. <a href={asset('politique-confidentialite.html')}>Confidentialité</a></p><button className="pill dark submit-button" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer mon message'} <Arrow /></button><p role="status" className={`form-status ${status}`}>{status === 'success' ? 'Merci, votre demande a bien été envoyée.' : status === 'error' ? 'L’envoi a échoué. Réessayez ou contactez-moi au 06 34 16 27 16.' : ''}</p></form>;
}
export default App;
