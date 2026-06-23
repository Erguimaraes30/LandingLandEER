export function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const centered = align === 'center';

  return (
    <div
      className={`mx-auto max-w-3xl ${centered ? 'text-center' : 'text-left'}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-landeer-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-landeer-text sm:text-lg">{text}</p> : null}
    </div>
  );
}
