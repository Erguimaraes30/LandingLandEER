import { useEffect, useState } from 'react';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const logoImage = assetPath('assets/landeer-logo-mark.png');
const logoText = assetPath('assets/landeer_escrita_fundo_preto.png');

function useExistingImage(src) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setExists(true);
    image.onerror = () => setExists(false);
    image.src = src;
  }, [src]);

  return exists;
}

export function Logo({ compact = false }) {
  const hasMark = useExistingImage(logoImage);
  const hasWordmark = useExistingImage(logoText);

  if (hasMark || hasWordmark) {
    return (
      <span className="flex items-center gap-3">
        {hasMark ? <img src={logoImage} alt="" className="h-9 w-11 object-contain" /> : null}
        {hasWordmark ? (
          <img src={logoText} alt="LandEER" className={compact ? 'h-6 w-auto' : 'h-7 w-auto'} />
        ) : (
          <FallbackLogo compact={compact} />
        )}
      </span>
    );
  }

  return <FallbackLogo compact={compact} />;
}

function FallbackLogo({ compact }) {
  return (
    <span className={`font-display font-black tracking-normal ${compact ? 'text-xl' : 'text-2xl'}`}>
      Land
      <span className="bg-landeer-gradient bg-clip-text text-transparent">EER</span>
    </span>
  );
}
