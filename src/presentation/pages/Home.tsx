import { SEOHead } from '@/presentation/components/layout/SEOHead';
import { Button } from '@/presentation/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Calculator, Landmark, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <SEOHead 
        title="Herramientas Financieras para Colombia"
        description="Calculadoras gratuitas de Retención en la Fuente, Créditos Hipotecarios e Inversiones para Colombia 2025."
        keywords="calculadora financiera, retención fuente 2025, credito hipotecario colombia, rentabilidad inversión"
      />
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Toma el control de tus finanzas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas simples y precisas diseñadas para el mercado colombiano. 
            Sin registros, 100% gratuito.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link to="/calculadora-retefuente">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Retención en la Fuente</CardTitle>
                <CardDescription>
                  Calcula tu salario neto y retenciones para el año 2025.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start pl-0 text-primary hover:text-primary hover:bg-primary/10">
                  Calcular ahora →
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/calculadora-credito-hipotecario">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Landmark className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Crédito Hipotecario</CardTitle>
                <CardDescription>
                  Simula cuotas mensuales y proyección de pagos UVR o Pesos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start pl-0 text-secondary hover:text-secondary hover:bg-secondary/10">
                  Simular crédito →
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/simulador-inversion">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Simulador de Inversión</CardTitle>
                <CardDescription>
                  Proyecta rendimientos de CDTs, FICs y ahorros programados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start pl-0 text-accent hover:text-accent hover:bg-accent/10">
                  Proyectar ganancias →
                </Button>
              </CardContent>
            </Card>
          </Link>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">¿Por qué FinanzasSimple.co?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FinanzasSimple.co es tu aliado financiero gratuito diseñado específicamente para Colombia. 
              Ofrecemos calculadoras especializadas con tasas y regulaciones actualizadas a 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-primary">100% Colombiano</h3>
              <p className="text-muted-foreground text-sm">
                Todas nuestras calculadoras están adaptadas a las regulaciones, tasas y normativas de la DIAN y entidades financieras colombianas vigentes en 2025.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-primary">Siempre Gratuito</h3>
              <p className="text-muted-foreground text-sm">
                Sin registros, sin pagos ocultos, sin suscripciones. Todas las herramientas son completamente gratuitas y siempre lo serán.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-primary">Privacidad Total</h3>
              <p className="text-muted-foreground text-sm">
                No guardamos ni compartimos ninguno de tus datos financieros. Todos los cálculos se realizan en tu navegador de forma segura.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-primary">Resultados Instantáneos</h3>
              <p className="text-muted-foreground text-sm">
                Obtén cálculos precisos en segundos. Sin complicaciones, sin fórmulas complejas, solo resultados claros que puedes entender.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nuestro Compromiso</h2>
            <p className="text-lg text-muted-foreground">
              En FinanzasSimple.co creemos que todos los colombianos merecen acceso a herramientas financieras de calidad, 
              sin importar su nivel de conocimiento o experiencia. Por eso creamos calculadoras simples, precisas y totalmente gratuitas.
            </p>
            <p className="text-muted-foreground">
              Ya sea que estés calculando tu retención en la fuente, simulando un crédito hipotecario, o proyectando una inversión, 
              nuestras herramientas te ayudarán a tomar decisiones informadas con información clara y actualizada.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Comienza ahora y toma el control de tus finanzas</h2>
            <div className="flex justify-center gap-4">
               <Link to="/calculadora-retefuente">
                  {/* <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Empezar Ahora
                  </Button> */}
               </Link>
            </div>
        </section>
      </div>
    </>
  );
};
