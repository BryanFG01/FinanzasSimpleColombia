import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

import { useAds } from '@/presentation/hooks/useAds';

export const MainLayout = () => {
  useAds();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
