import { AdContainer } from '../components/ads/AdContainer';
import { LoanCalculator } from '../components/calculators/LoanCalculator';
import { SEOHead } from '../components/layout/SEOHead';

export const LoanCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Calculadora de Crédito Hipotecario Colombia"
        description="Simula tu crédito hipotecario en pesos o UVR. Calcula la cuota mensual y el costo total de tu vivienda."
        keywords="calculadora hipoteca colombia, credito vivienda, simulador uvr pesos"
        canonical="/calculadora-credito-hipotecario"
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-8 text-center pt-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Calculadora de Crédito Hipotecario
          </h1>
          <p className="text-muted-foreground text-lg">
            Proyecta los pagos de tu crédito hipotecario y conoce cuánto pagarás realmente por tu vivienda.
          </p>
        </section>

        <AdContainer slotId="1234567890" format="horizontal" className="mb-8" />

        <section className="mb-12 max-w-2xl mx-auto">
          <LoanCalculator />
        </section>

        <AdContainer slotId="0987654321" format="rectangle" className="mb-8" />

        <section className="prose max-w-none mb-12 bg-muted/10 p-6 rounded-xl">
          <h2>Consejos para tu Crédito Hipotecario</h2>
          <p>
            Al solicitar un crédito hipotecario en Colombia, ten en cuenta que la tasa de interés puede ser fija (en pesos) o variable (en UVR).
          </p>
          <ul>
            <li><strong>Crédito en Pesos:</strong> Tu cuota se mantiene fija durante todo el crédito. Ideal para estabilidad.</li>
            <li><strong>Crédito en UVR:</strong> Tu cuota varía según la inflación. Generalmente empieza más baja pero aumenta con el tiempo.</li>
          </ul>
        </section>
      </div>
    </>
  );
};
