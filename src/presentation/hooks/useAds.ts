import adsConfig from '@/infrastructure/config/adsConfig.json';
import { useEffect } from 'react';

export const useAds = () => {
  useEffect(() => {
    if (adsConfig.providers.adSense.enabled) {
      if (document.querySelector('script[src*="adsbygoogle.js"]')) return;

      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.providers.adSense.clientId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, []);
};
