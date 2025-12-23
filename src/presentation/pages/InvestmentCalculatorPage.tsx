import { AdContainer } from '../components/ads/AdContainer';
import { InvestmentCalculator } from '../components/calculators/InvestmentCalculator';
import { SEOHead } from '../components/layout/SEOHead';

export const InvestmentCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Simulador de Inversión y Rentabilidad"
        description="Proyecta el crecimiento de tus inversiones en Colombia. Calcula el interés compuesto de CDTs, FICs y ahorros."
        keywords="simulador inversion, rentabilidad cdt, interes compuesto colombia"
        canonical="/simulador-inversion"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-8 text-center pt-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Simulador de Inversión
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubre el poder del interés compuesto y planifica tu libertad financiera.
          </p>
        </section>

        <AdContainer slotId="1234567890" format="horizontal" className="mb-8" />

        <section className="mb-12 max-w-2xl mx-auto">
          <InvestmentCalculator />
        </section>

        <AdContainer slotId="0987654321" format="rectangle" className="mb-8" />

        <section className="prose max-w-none mb-12 bg-muted/10 p-6 rounded-xl">
          <h2>¿Por qué invertir temparano?</h2>
          <p>
            El interés compuesto es tu mejor aliado. Al reinvertir tus ganancias, tu dinero crece exponencialmente con el tiempo.
          </p>
        </section>
      </div>
    </>
  );
};
