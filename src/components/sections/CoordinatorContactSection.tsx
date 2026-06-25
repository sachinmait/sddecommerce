import { coordinatorContacts } from "@/lib/content/coordinatorContacts";

export function CoordinatorContactSection() {
  const activeContacts = coordinatorContacts.filter((contact) => contact.isActive);

  return (
    <section className="panel" aria-labelledby="contact-title">
      <h2 id="contact-title">Program Coordinators</h2>
      <div className="contact-grid">
        {activeContacts.map((contact) => (
          <article key={contact.id} className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.roleTitle}</p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
