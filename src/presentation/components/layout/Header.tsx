import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          FinanzasSimple<span className="text-secondary">.co</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/calculadora-retefuente" className="hover:text-primary transition-colors">Retefuente</Link>
          <Link to="/calculadora-credito-hipotecario" className="hover:text-primary transition-colors">Hipoteca</Link>
          <Link to="/simulador-inversion" className="hover:text-primary transition-colors">Inversión</Link>
        </nav>
      </div>
    </header>
  );
};
