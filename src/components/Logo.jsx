const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const logoImage = assetPath('assets/landeer-logo-mark-compact.png');

export function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <img src={logoImage} alt="" decoding="async" className="h-9 w-11 object-contain" />
      <FallbackLogo compact={compact} />
    </span>
  );
}

function FallbackLogo({ compact }) {
  return (
    <span className={`font-display font-black tracking-normal ${compact ? 'text-xl' : 'text-2xl'}`}>
      Land
      <span className="bg-landeer-gradient bg-clip-text text-transparent">EER</span>
    </span>
  );
}
