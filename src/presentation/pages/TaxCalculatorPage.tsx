import { AdContainer } from '../components/ads/AdContainer';
import { TaxCalculator } from '../components/calculators/TaxCalculator';
import { SEOHead } from '../components/layout/SEOHead';

export const TaxCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Calculadora de Retención en la Fuente 2025"
        description="Calcula cuánto te descontarán por retención en la fuente en Colombia este 2025. Herramienta gratuita y actualizada."
        keywords="retefuente 2025, calculadora retencion en la fuente, salarios colombia"
        canonical="/calculadora-retefuente"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-8 text-center pt-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Calculadora de Retención en la Fuente 2025
          </h1>
          <p className="text-muted-foreground text-lg">
            Calcula tu retención en la fuente mensual de forma precisa según la normativa vigente en Colombia.
          </p>
        </section>

        <AdContainer slotId="1234567890" format="horizontal" className="mb-8" />

        <section className="mb-12 max-w-2xl mx-auto">
          <TaxCalculator />
        </section>

        <AdContainer slotId="0987654321" format="rectangle" className="mb-8" />

        <section className="prose max-w-none mb-12 bg-muted/10 p-6 rounded-xl">
          <h2>¿Cómo funciona la retención en la fuente en 2025?</h2>
          <p>
            La retención en la fuente no es un impuesto en sí mismo, sino un mecanismo de recaudo anticipado del impuesto de renta.
            Para el año 2025, la base gravable en UVT (Unidad de Valor Tributario) se actualizó a <strong>$47.065</strong>.
          </p>
          <h3>Deducciones permitidas</h3>
          <ul>
            <li>Aportes obligatorios a salud (4%)</li>
            <li>Aportes obligatorios a pensión (4%)</li>
            <li>Fondo de solidaridad pensional (1% - 2% según ingresos)</li>
            <li>Rentas exentas (25% del salario, con tope)</li>
          </ul>
        </section>
      </div>
    </>
  );
};
