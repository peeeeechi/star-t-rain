export default function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow" data-reveal="body">
        <span>{number}</span> {label}
      </p>
      <div>
        <h2 data-reveal="title" data-reveal-delay="90">{title}</h2>
        {description && <p className="section-description" data-reveal="body" data-reveal-delay="180">{description}</p>}
      </div>
    </header>
  );
}
