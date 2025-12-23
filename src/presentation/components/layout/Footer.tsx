import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted/10 border-t py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">FinanzasSimple.co</h3>
            <p className="text-sm text-muted">
              Herramientas financieras simples y gratuitas para tomar mejores decisiones.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Herramientas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calculadora-retefuente">Retención en la Fuente</Link></li>
              <li><Link to="/calculadora-credito-hipotecario">Crédito Hipotecario</Link></li>
              <li><Link to="/simulador-inversion">Simulador de Inversión</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/terminos">Términos de Uso</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-muted">
          © {new Date().getFullYear()} FinanzasSimple Colombia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
