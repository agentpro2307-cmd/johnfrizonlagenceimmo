import React, { useEffect, useRef, useState } from 'react';
type Props = { isOpen: boolean; onClose: () => void; type: 'short' | 'qualifying' | 'estimation' | 'open-house' };
export default function FormModal({ isOpen, onClose, type }: Props) {
  const dialog = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [estimation, setEstimation] = useState(false);
  useEffect(() => { if (isOpen) { setStatus('idle'); setEstimation(type === 'estimation'); } }, [isOpen, type]);
  useEffect(() => {
    if (!isOpen) return;
    const priorFocus = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector<HTMLElement>('input,button')?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      const list = Array.from(dialog.current?.querySelectorAll<HTMLElement>('a[href],button:not(:disabled),input,select,textarea') || []) as HTMLElement[];
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', handleKey); priorFocus?.focus(); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const title = type === 'open-house' ? 'Votre visite privée à Léaz (01200)' : estimation ? 'Faire estimer mon bien' : type === 'qualifying' ? 'Confier ma recherche' : 'Parlons de votre projet';
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const data = new FormData(form);
    data.set('type', type); data.set('estimation', estimation ? 'oui' : 'non');
    if (type === 'open-house') data.set('bien', 'Grange rénovée Léaz (01200) — 203 m² — 829 000 €');
    data.set('_subject', type === 'open-house' ? 'Préinscription visite privée — Léaz' : estimation ? 'Nouvelle demande d’estimation' : type === 'qualifying' ? 'Nouvelle recherche immobilière' : 'Nouvelle demande de contact');
    setStatus('sending');
    try { const res = await fetch('https://formspree.io/f/xykdkwwz', { method: 'POST', body: data, headers: { Accept: 'application/json' } }); if (!res.ok) throw new Error(); setStatus('success'); form.reset(); } catch { setStatus('error'); }
  }
  return <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialog}><div className="modal-heading"><h2 id="modal-title">{title}</h2><button className="modal-close" aria-label="Fermer le formulaire" onClick={onClose}>✕</button></div><form className="modal-form" onSubmit={submit}><div className="form-grid"><label>Nom *<input name="name" autoComplete="name" required /></label><label>Téléphone *<input name="phone" type="tel" autoComplete="tel" required /></label></div><label>Email *<input name="email" type="email" autoComplete="email" required /></label>{type !== 'qualifying' && type !== 'open-house' && <label className="check-row"><input type="checkbox" checked={estimation} onChange={e => setEstimation(e.target.checked)} />Je souhaite faire estimer mon bien</label>}{(estimation || type === 'qualifying') && <fieldset><legend>{estimation ? 'Votre bien' : 'Votre recherche'}</legend><div className="form-grid"><label>{estimation ? 'Commune' : 'Secteur recherché'}<input name="city" /></label><label>Type de bien<select name="propertyType"><option value="">Sélectionner</option><option>Maison</option><option>Appartement</option><option>Chalet</option><option>Terrain</option><option>Autre</option></select></label></div><div className="form-grid"><label>{estimation ? 'Surface habitable (m²)' : 'Surface souhaitée (m²)'}<input name="surface" type="number" min="1" /></label><label>{estimation ? 'Nombre de pièces' : 'Budget maximum (€)'}<input name={estimation ? 'rooms' : 'budget'} type="number" min="1" /></label></div><label>Votre calendrier<input name="timeline" placeholder="Ex. : dans les six prochains mois" /></label></fieldset>}{type === 'open-house' && <fieldset><legend>Votre projet d’achat</legend><p className="event-form-intro">Votre demande sera suivie d’un échange téléphonique pour confirmer votre participation et convenir d’un créneau. La préinscription ne vaut pas réservation.</p><div className="form-grid"><label>Budget maximum (€) *<input name="budget" type="number" min="1" required /></label><label>Financement *<select name="financing" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Financement validé avec ma banque ou mon courtier</option><option>Étude de financement en cours</option><option>Achat sans emprunt</option><option>Financement à étudier</option></select></label></div><label>Où en est votre projet ? *<select name="purchaseStage" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Je recherche activement</option><option>Je dois vendre mon bien avant d’acheter</option><option>Je prépare mon projet</option></select></label><label>Vos disponibilités pour un appel *<input name="callbackAvailability" placeholder="Ex. : en semaine entre 12 h et 14 h" required /></label></fieldset>}<label>Votre message<textarea name="message" rows={4} placeholder={estimation ? 'Caractéristiques, travaux, extérieur…' : 'Présentez-moi votre projet…'} /></label><p className="privacy-note">Ces informations servent à répondre à votre demande. <a href={`${import.meta.env.BASE_URL}politique-confidentialite.html`}>Politique de confidentialité</a>.</p><button className="pill dark submit-button" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : type === 'open-house' ? 'Demander ma préinscription' : 'Envoyer ma demande'}<span className="arrow" aria-hidden="true">↗</span></button><p className={`form-status ${status}`} role="status">{status === 'success' ? type === 'open-house' ? 'Préinscription reçue. Je vous recontacte pour échanger sur votre projet et confirmer les modalités de la visite.' : 'Merci, votre demande a bien été envoyée. Je reviens vers vous prochainement.' : status === 'error' ? 'Impossible d’envoyer votre demande. Réessayez ou appelez le 06 34 16 27 16.' : ''}</p></form></div></div>;
}
