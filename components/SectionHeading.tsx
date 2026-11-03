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
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </header>
  );
}
