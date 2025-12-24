import { MainLayout } from '@/presentation/components/layout/MainLayout';
import { Home } from '@/presentation/pages/Home';
import { InvestmentCalculatorPage } from '@/presentation/pages/InvestmentCalculatorPage';
import { LoanCalculatorPage } from '@/presentation/pages/LoanCalculatorPage';
import { PrivacyPolicy } from '@/presentation/pages/PrivacyPolicy';
import { TaxCalculatorPage } from '@/presentation/pages/TaxCalculatorPage';
import { Route, Routes } from 'react-router-dom';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="calculadora-retefuente" element={<TaxCalculatorPage />} />
          <Route path="calculadora-credito-hipotecario" element={<LoanCalculatorPage />} />
          <Route path="simulador-inversion" element={<InvestmentCalculatorPage />} />
          <Route path="privacidad" element={<PrivacyPolicy />} />
          <Route path="terminos" element={<PrivacyPolicy />} /> {/* Temporary setup */}
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
