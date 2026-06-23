export function Card({ children, className = '' }) {
  return (
    <article
      className={`group rounded-[8px] border border-white/10 bg-panel-gradient p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-landeer-cyan/35 hover:bg-white/[0.08] ${className}`}
    >
      {children}
    </article>
  );
}
